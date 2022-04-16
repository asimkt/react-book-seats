import { Seat } from 'components/atoms/Seat';
import { ISeatRowType, ISeatState } from 'types';

interface ISeat {
  state: ISeatState;
  disabled?: boolean;
}

interface ISeatRow {
  type: ISeatRowType;
  price: string;
  rowName: string;
  rowSeats: ISeat[];
}

interface Props {
  seatsData: ISeatRow[];
}

export const SeatGrid = ({ seatsData }: Props) => {
  const onSeatSelect = (
    position: [number | string, number | string],
    rowName: string,
  ) => {
    console.log(position, rowName);
  };
  return (
    <div className="flex px-4 py-6">
      <div className="gap-3 flex flex-col">
        {seatsData.map((row, i) => {
          return (
            <div className="flex gap-4 items-center">
              <div className="w-32 text-center text-slate-500 font-thin text-sm">
                {row.rowName}
              </div>
              <div className="flex gap-2">
                {row.rowSeats.map((seat, j) => {
                  return (
                    <Seat
                      state={seat.state}
                      hidden={seat.disabled}
                      position={[i + 1, j + 1]}
                      onClick={position => onSeatSelect(position, row.rowName)}
                    />
                  );
                })}
              </div>
              <div className="w-32 text-center text-slate-500 font-thin text-sm">
                {row.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
