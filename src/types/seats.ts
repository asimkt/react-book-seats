export enum ISeatRowType {
  Premium = 'premium',
  Normal = 'normal',
}

export enum ISeatState {
  Vacant = 'Vacant',
  Disabled = 'Disabled',
  Reserved = 'Reserved',
  NotApplicable = 'NotApplicable',
}

interface ISeat {
  state: ISeatState;
  disabled?: boolean;
}

export interface ISeatRow {
  type: ISeatRowType;
  price: string;
  rowName: string;
  rowSeats: ISeat[];
}
