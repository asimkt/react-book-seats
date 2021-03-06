import { ISeat, ISeatRow } from 'types';

type iPosition = number | string;
type jPosition = number | string;
export type SeatPosition = [iPosition, jPosition];
export type SelectedSeat = {
  position: SeatPosition;
  rowName: string;
  price: number;
};

type Time = number | null;
export type BookMySeatstate = {
  timerLimit: number | null;
  secondsTimer: Time;
  seatsData: ISeatRow[];
  selectedSeats: SelectedSeat[];
  setSeatsData: (data: ISeatRow[]) => void;
  updateSeatsData: (seatsData: ISeat, position: [number, number]) => void;
  setTimer: (time: Time) => void;
  setTimerLimit: (limit: Time) => void;
  onSelectSeats: (seat: SelectedSeat) => void;
  onClearAllSelected: () => void;
};
