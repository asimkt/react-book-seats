interface Props {
  extraClassNames?: string;
  bgColor?: string;
  state: SeatState;
}

export enum SeatState {
  Vacant = 'Vacant',
  Disabled = 'Disabled',
  Selected = 'Selected',
  Reserved = 'Reserved',
  NotApplicable = 'NotApplicable',
}

const bgColorClassMap = {
  [SeatState.Vacant]: 'slate-50',
  [SeatState.Disabled]: 'slate-200',
  [SeatState.Selected]: 'blue-300',
  [SeatState.Reserved]: 'red-300',
  [SeatState.NotApplicable]: 'neutral-200',
};
const borderColorClassMap = {
  [SeatState.Vacant]: 'slate-100',
  [SeatState.Disabled]: 'slate-300',
  [SeatState.Selected]: 'blue-400',
  [SeatState.Reserved]: 'red-400',
  [SeatState.NotApplicable]: 'neutral-300',
};

export const Seat = ({ extraClassNames, state }: Props) => {
  return (
    <div className="group cursor-pointer relative">
      <div className="hidden border-slate-10 border-slate-30 border-blue-70 border-red-40 border-neutral-300" />
      <div
        className={`w-5 h-8 rounded overflow-hidden border-2
            ${extraClassNames} 
            bg-${bgColorClassMap[state] || 'slate-50'}
            border-${borderColorClassMap[state] || 'slate-50'}
            border-red-400
            `}
      />
    </div>
  );
};
