import { SeatGrid } from 'components/molecules/SeatGrid';
import { dummySeatsData } from 'components/molecules/SeatGrid/dummy';
import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { Link } from 'react-router-dom';

export const BookSeat = () => {
  return (
    <BaseLayout
      header={<Header />}
      main={
        <div className="container mx-auto">
          <h1 className="text-xl"> Book Seats</h1>
          <div>
            <SeatGrid seatsData={dummySeatsData} />
          </div>
          <Link to="/checkout">Checkout</Link>
        </div>
      }
    />
  );
};
