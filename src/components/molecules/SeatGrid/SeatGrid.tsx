import { Seat } from 'components/atoms/Seat';
import { SeatPosition, SelectedSeat } from 'hooks';
import { ISeatRow } from 'types';
interface Props {
  seatsData: ISeatRow[];
  selectedSeats: SelectedSeat[];
  onSeatSelection: ({
    position,
    rowName,
    price,
  }: {
    position: SeatPosition;
    rowName: string;
    price: number;
  }) => void;
}

const getPositionIndexes = (i: number, j: number) =>
  [i + 1, j + 1] as SeatPosition;

export const SeatGrid = ({
  seatsData,
  selectedSeats,
  onSeatSelection,
}: Props) => {
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
            <div
              className="flex gap-4 items-center"
              key={i + '-' + row.rowName}
            >
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
                      key={j}
                      state={seat.state}
                      hidden={seat.disabled}
                      position={getPositionIndexes(i, j)}
                      onClick={position =>
                        onSeatSelection({
                          position,
                          rowName: row.rowName,
                          price: row.priceVal,
                        })
                      }
                    />
                  );
                })}
              </div>
              <div className="w-32 text-center text-slate-500 font-thin text-sm">
                {row.priceLabel}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
