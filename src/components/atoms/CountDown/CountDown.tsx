import { useEffect } from 'react';
import { useCountdown } from './useCountdown';
import { DateTimeDisplay } from './DateTimeDisplay';

interface Props {
  targetDate: string | number;
  onExpire: () => void;
  showHoursDays?: boolean;
}
export const CountdownTimer = ({
  targetDate,
  showHoursDays,
  onExpire,
}: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const expired = days + hours + minutes + seconds <= 0;

  useEffect(() => {
    if (expired) {
      onExpire();
    }
  }, [expired, onExpire]);

  if (expired) {
    return null;
  }

  return (
    <div className="group relative py-2 px-3 flex items-center justify-center font-medium font-mono uppercase bg-white text-gray-900 cursor-pointer text-2xl">
      {showHoursDays ? (
        <>
          <DateTimeDisplay value={days} />
          <p>:</p>
          <DateTimeDisplay value={hours} />
          <p>:</p>
        </>
      ) : null}
      <DateTimeDisplay value={minutes} isEnding={minutes < 1} />
      <p>:</p>
      <DateTimeDisplay value={seconds} isEnding={minutes < 1} />
    </div>
  );
};
