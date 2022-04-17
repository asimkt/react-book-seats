import { dummySeatsData } from 'components/molecules/SeatGrid/dummy';
import { ISeatRow } from 'types';
import create from 'zustand';
import { BookSeatState, SelectedSeat } from './types';

export const useStore = create<BookSeatState>(set => ({
  secondsTimer: null,
  timerLimit: null,
  seatsData: dummySeatsData,
  selectedSeats: [] as SelectedSeat[],
  setSeatsData: (seatsData: ISeatRow[]) => set({ seatsData }),
  setTimerLimit: (limit: number | null) => set({ timerLimit: limit }),
  setTimer: (timer: number | null) => set({ secondsTimer: timer }),
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
