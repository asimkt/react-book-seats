import { Button } from 'components/atoms/Button';
import { SeatGrid } from 'components/molecules/SeatGrid';
import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { SeatPosition, useStore } from 'hooks';
import { Link } from 'react-router-dom';

const BookSeatComp = () => {
  const seatsData = useStore(state => state.seatsData);
  const selectedSeats = useStore(state => state.selectedSeats);
  const updateSelectedSeats = useStore(state => state.onSelectSeats);

  const onSeatSelection = (position: SeatPosition, rowName: string) => {
    updateSelectedSeats({
      position,
      rowName,
    });
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
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Link to="/checkout">
                  <Button>Pay</Button>
                </Link>
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
