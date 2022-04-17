import { Button } from 'components/atoms/Button';
import { CountdownTimer } from 'components/atoms/CountDown';
import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { useStore } from 'hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutComp = () => {
  const navigate = useNavigate();
  const remainingTime = useStore(state => state.secondsTimer);
  const selectedSeats = useStore(state => state.selectedSeats);
  const clearSelectedSeats = useStore(state => state.onClearAllSelected);
  const updateTimer = useStore(state => state.setTimer);

  useEffect(() => {
    if (
      remainingTime === null ||
      remainingTime <= 0 ||
      selectedSeats.length === 0
    ) {
      navigate('/book');
    }
  }, [navigate, remainingTime, selectedSeats.length]);

  const totalPrice = () => {
    const price = selectedSeats.reduce((totalPrice, seat) => {
      return totalPrice + seat.price;
    }, 0);
    return price;
  };

  const onExpire = () => {
    alert('Timeout! Please book from the available seats again')!;
    updateTimer(null);
    clearSelectedSeats();
    navigate('/book');
  };

  const NOW_IN_MS = new Date().getTime();

  const onSubmit = () => {
    // TODO: Will be using an api and related logic here.
    alert('Seats confirmed')!;
    updateTimer(null);
    clearSelectedSeats();
    navigate('/book');
    // After payment, the seats data also will change.
  };

  return (
    <div className="container mx-auto">
      {remainingTime !== null ? (
        <>
          <CountdownTimer
            targetDate={NOW_IN_MS + remainingTime}
            onExpire={onExpire}
          />
          <div className="text-slate-400 text-sm flex justify-center">
            Please complete the transaction before timer runs out.
          </div>
        </>
      ) : null}
      <div className="text-slate-600 text-xl pt-6 pb-3 px-3 flex justify-center">
        Selected seats.
      </div>
      <div className="flex gap-x-2 gap-y-3  justify-center">
        {selectedSeats.map(seat => {
          return (
            <div
              className="w-10 h-16 rounded overflow-hidden border-2 flex justify-center items-center text-slate-500 text-sm bg-blue-100 border-blue-200"
              key={seat.rowName}
            >
              {seat.rowName}
              {seat.position[1]}
            </div>
          );
        })}
      </div>
      <div className="flex gap-x-2 gap-y-3 py-6 px-3 justify-center text-slate-800 text-xl ">
        <Button onClick={onSubmit}>Pay {totalPrice()}/-</Button>
      </div>
    </div>
  );
};

export const Checkout = () => {
  return <BaseLayout header={<Header />} main={<CheckoutComp />} />;
};
