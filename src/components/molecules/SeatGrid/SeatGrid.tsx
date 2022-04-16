import { Seat } from 'components/atoms/Seat';
import { ISeatRowType, ISeatState } from 'types';

interface ISeat {
  state: ISeatState;
  disabled?: boolean;
}

interface ISeatRow {
  type: ISeatRowType;
  price: number;
  rowSeats: ISeat[];
}

interface Props {
  seatsData: ISeatRow[];
}

export const SeatGrid = ({ seatsData }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="gap-3 flex flex-col">
        {seatsData.map(row => {
          return (
            <div className="flex gap-2">
              {row.rowSeats.map(seat => {
                return <Seat state={seat.state} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
