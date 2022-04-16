import { Props, bgColorClassMap, borderColorClassMap } from './types';

export const Seat = ({ extraClassNames = '', state }: Props) => {
  return (
    <div className="group cursor-pointer relative">
      <div className="hidden border-slate-10 border-slate-30 border-blue-70 border-red-40 border-neutral-300" />
      <div
        className={`w-5 h-8 rounded overflow-hidden border-2
            ${extraClassNames} 
            ${bgColorClassMap[state] || 'bg-slate-100'}
            ${borderColorClassMap[state] || 'border-slate-100'}
            `}
      />
    </div>
  );
};
