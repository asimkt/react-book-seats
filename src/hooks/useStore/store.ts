import { dummySeatsData } from 'components/molecules/SeatGrid/dummy';
import { ISeat, ISeatRow } from 'types';
import create from 'zustand';
import { BookMySeatstate, SelectedSeat } from './types';

export const useStore = create<BookMySeatstate>(set => ({
  secondsTimer: null,
  timerLimit: null,
  seatsData: dummySeatsData,
  selectedSeats: [] as SelectedSeat[],
  setSeatsData: (seatsData: ISeatRow[]) => set({ seatsData }),
  setTimerLimit: (limit: number | null) => set({ timerLimit: limit }),
  setTimer: (timer: number | null) => set({ secondsTimer: timer }),
  updateSeatsData: (seatsData: ISeat, position: [number, number]) =>
    set(state => {
      const rowSeats = state.seatsData[position[0]].rowSeats;
      return {
        seatsData: [
          ...state.seatsData.slice(0, position[0]),
          {
            ...state.seatsData[position[0]],
            rowSeats: [
              ...rowSeats.slice(0, position[1]),
              {
                ...seatsData,
              },
              ...rowSeats.slice(position[1] + 1),
            ],
          },
          ...state.seatsData.slice(position[0] + 1),
        ],
      };
    }),
  onSelectSeats: seat =>
    set(state => {
      // add seat if not present, otherwise remove
      const seatAlreadySelected = state.selectedSeats.filter(
        st =>
          st.position[0] !== seat.position[0] ||
          st.position[1] !== seat.position[1],
      );
      if (seatAlreadySelected.length !== state.selectedSeats.length) {
        return { selectedSeats: seatAlreadySelected };
      }
      return { selectedSeats: [...state.selectedSeats, seat] };
    }),
  onClearAllSelected: () => set(state => ({ selectedSeats: [] })),
}));
