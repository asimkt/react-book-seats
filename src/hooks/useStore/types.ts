import { ISeatRow } from 'types';

type iPosition = number | string;
type jPosition = number | string;
export type SeatPosition = [iPosition, jPosition];
export type SelectedSeat = {
  position: SeatPosition;
  rowName: string;
};

type Time = number | null;
export type BookSeatState = {
  secondsTimer: Time;
  seatsData: ISeatRow[];
  selectedSeats: SelectedSeat[];
  setTimer: (time: Time) => void;
  onSelectSeats: (seat: SelectedSeat) => void;
  onClearAllSelected: () => void;
};
