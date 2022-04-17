import { ISeatRow } from 'types';

type iPosition = number | string;
type jPosition = number | string;
export type SeatPosition = [iPosition, jPosition];
export type SelectedSeat = {
  position: SeatPosition;
  rowName: string;
};

export type BookSeatState = {
  seatsData: ISeatRow[];
  selectedSeats: SelectedSeat[];
  onSelectSeats: (seat: SelectedSeat) => void;
  onClearAllSelected: () => void;
};
