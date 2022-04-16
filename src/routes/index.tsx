import { Admin } from './Admin';

import { Routes, Route } from 'react-router-dom';
import { BookSeat } from './BookSeat';
import { Checkout } from './Checkout';

const NotFound = () => <div>Sorry, nothing here.</div>;

export const RootApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/book" element={<BookSeat />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
