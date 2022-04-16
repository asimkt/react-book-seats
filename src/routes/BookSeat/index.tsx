import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { Link } from 'react-router-dom';

export const BookSeat = () => {
  return (
    <BaseLayout
      header={<Header />}
      main={
        <div className="container mx-auto">
          Book Seats
          <Link to="/checkout">Checkout</Link>
        </div>
      }
    />
  );
};
