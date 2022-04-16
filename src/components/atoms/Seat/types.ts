import { ISeatState } from 'types';

export interface Props {
  extraClassNames?: string;
  bgColor?: string;
  state: ISeatState;
}

export const bgColorClassMap = {
  [ISeatState.Vacant]: 'bg-slate-100',
  [ISeatState.Disabled]: 'bg-slate-200',
  [ISeatState.Selected]: 'bg-blue-300',
  [ISeatState.Reserved]: 'bg-red-300',
  [ISeatState.NotApplicable]: 'bg-slate-50',
};
export const borderColorClassMap = {
  [ISeatState.Vacant]: 'border-slate-200',
  [ISeatState.Disabled]: 'border-slate-300',
  [ISeatState.Selected]: 'border-blue-400',
  [ISeatState.Reserved]: 'border-red-400',
  [ISeatState.NotApplicable]: 'border-slate-50',
};
