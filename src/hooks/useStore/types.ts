import { ISeatRow } from 'types';

type iPosition = number | string;
type jPosition = number | string;
export type SeatPosition = [iPosition, jPosition];
export type SelectedSeat = {
  position: SeatPosition;
  rowName: string;
  price: number;
};

type Time = number | null;
export type BookSeatState = {
  timerLimit: number | null;
  secondsTimer: Time;
  seatsData: ISeatRow[];
  selectedSeats: SelectedSeat[];
  setSeatsData: (data: ISeatRow[]) => void;
  setTimer: (time: Time) => void;
  setTimerLimit: (limit: Time) => void;
  onSelectSeats: (seat: SelectedSeat) => void;
  onClearAllSelected: () => void;
};
