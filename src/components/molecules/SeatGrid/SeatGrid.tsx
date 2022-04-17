import { Seat } from 'components/atoms/Seat';
import { SeatPosition, SelectedSeat } from 'hooks';
import { ISeatRow } from 'types';
interface Props {
  seatsData: ISeatRow[];
  onSeatSelection: (position: SeatPosition, rowName: string) => void;
  selectedSeats: SelectedSeat[];
}

const getPositionIndexes = (i: number, j: number) =>
  [i + 1, j + 1] as SeatPosition;

export const SeatGrid = ({
  seatsData,
  onSeatSelection,
  selectedSeats,
}: Props) => {
  const onSeatSelect = (position: SeatPosition, rowName: string) => {
    onSeatSelection(position, rowName);
  };

  const isSeatSelected = ([i, j]: SeatPosition) => {
    return selectedSeats.find(
      seat => seat.position[0] === i && seat.position[1] === j,
    );
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
                      selected={Boolean(
                        isSeatSelected(getPositionIndexes(i, j)),
                      )}
                      state={seat.state}
                      hidden={seat.disabled}
                      position={getPositionIndexes(i, j)}
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
