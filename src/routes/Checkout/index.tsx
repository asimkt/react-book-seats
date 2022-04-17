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

  const onExpire = () => {
    alert('Timeout! Please book from the available seats again')!;
    updateTimer(null);
    navigate('/book');
  };

  const NOW_IN_MS = new Date().getTime();

  return (
    <div className="container mx-auto">
      {remainingTime !== null ? (
        <CountdownTimer
          targetDate={NOW_IN_MS + remainingTime}
          onExpire={onExpire}
        />
      ) : null}
    </div>
  );
};

export const Checkout = () => {
  return <BaseLayout header={<Header />} main={<CheckoutComp />} />;
};
