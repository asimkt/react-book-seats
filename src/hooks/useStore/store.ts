import { dummySeatsData } from 'components/molecules/SeatGrid/dummy';
import create from 'zustand';
import { BookSeatState, SelectedSeat } from './types';

export const useStore = create<BookSeatState>(set => ({
  seatsData: dummySeatsData,
  selectedSeats: [] as SelectedSeat[],
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
