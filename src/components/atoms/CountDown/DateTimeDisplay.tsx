interface Props {
  value: number;
  isEnding?: boolean;
}

export const DateTimeDisplay = ({ value, isEnding }: Props) => {
  return (
    <div className={isEnding ? 'text-red-500' : ''}>
      <p>{value.toString().padStart(2, '0')}</p>
    </div>
  );
};
