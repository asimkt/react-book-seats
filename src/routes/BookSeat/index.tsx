import { Button } from 'components/atoms/Button';
import { SeatGrid } from 'components/molecules/SeatGrid';
import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { SeatPosition, useStore } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { ISeatState } from 'types';

const BookSeatComp = () => {
  const seatsData = useStore(state => state.seatsData);
  const timeLimit = useStore(state => state.timerLimit);
  const selectedSeats = useStore(state => state.selectedSeats);
  const updateSelectedSeats = useStore(state => state.onSelectSeats);
  const updateSeatsData = useStore(state => state.updateSeatsData);
  const updateTimer = useStore(state => state.setTimer);

  const onSeatSelection = ({
    position,
    rowName,
    price,
  }: {
    position: SeatPosition;
    rowName: string;
    price: number;
  }) => {
    updateSelectedSeats({
      position,
      rowName,
      price,
    });
  };

  const navigate = useNavigate();

  const onPayNavigate = () => {
    updateTimer(timeLimit);
    navigate('/checkout');
  };

  const onMockEvent = () => {
    // This event would be from a websocket event ideally read through a hook like usePusher.
    const sampleMockEvent = {
      type: 'USER_SELECTS_SEAT',
      payload: {
        seatPosition: [
          Math.floor(Math.random() * seatsData.length),
          Math.floor(Math.random() * seatsData[0].rowSeats.length),
        ],
      },
    };
    if (sampleMockEvent.type === 'USER_SELECTS_SEAT') {
      updateSeatsData(
        {
          state: ISeatState.Reserved,
        },
        [
          sampleMockEvent.payload.seatPosition[0],
          sampleMockEvent.payload.seatPosition[1],
        ],
      );
    }
  };

  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Book seats
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please book your seats from the right pane to continue
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <div className="block text-sm font-medium text-gray-700">
                    Book Seats
                  </div>
                  <div className="mt-1">
                    <div>
                      <SeatGrid
                        seatsData={seatsData}
                        onSeatSelection={onSeatSelection}
                        selectedSeats={selectedSeats}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    You won't be able to change your seats after payment is done
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 gap-5">
                <Button className="mx-4" onClick={onMockEvent}>
                  Mock websocket event to realtime book reflection
                </Button>
                <Button
                  onClick={onPayNavigate}
                  disabled={Boolean(!selectedSeats.length)}
                >
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BookSeat = () => {
  return <BaseLayout header={<Header />} main={<BookSeatComp />} />;
};
