import { ISeatState } from 'types';
import { Props, bgColorClassMap, borderColorClassMap } from './types';

export const Seat = ({
  extraClassNames = '',
  state,
  hidden,
  position,
  onClick,
}: Props) => {
  const onSeatSelect = (
    pos: [string | number, string | number],
    state: ISeatState,
  ) => {
    if (state !== ISeatState.Disabled && state !== ISeatState.NotApplicable) {
      onClick(pos);
    }
  };
  return (
    <div
      className={`
        group relative 
        ${hidden ? 'invisible' : ''} 
        ${
          state !== ISeatState.Disabled && state !== ISeatState.NotApplicable
            ? 'cursor-pointer'
            : 'cursor-not-allowed pointer-events-none opacity-50 text-slate-100'
        }`}
      onClick={() => onSeatSelect(position, state)}
    >
      <div
        className={`w-5 h-8 rounded overflow-hidden border-2 flex justify-center items-center text-slate-500 text-xs
            ${extraClassNames} 
            ${bgColorClassMap[state] || 'bg-slate-100'}
            ${borderColorClassMap[state] || 'border-slate-100'}
            `}
      >
        {position[1]}
      </div>
    </div>
  );
};
