import { ISeatRowType, ISeatState } from 'types';

export const dummySeatsData = [
  {
    type: ISeatRowType.Premium,
    priceLabel: '₹1000',
    priceVal: 1000,
    rowName: 'A',
    rowSeats: [
      {
        disabled: true,
        state: ISeatState.NotApplicable,
      },
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Reserved,
      },
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Reserved,
      },
      {
        disabled: true,
        state: ISeatState.NotApplicable,
      },
    ],
  },
  {
    type: ISeatRowType.Normal,
    priceLabel: '₹750',
    priceVal: 750,

    rowName: 'C',
    rowSeats: [
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Reserved,
      },
      {
        state: ISeatState.Disabled,
      },
      {
        state: ISeatState.NotApplicable,
      },
      {
        state: ISeatState.Reserved,
      },
      {
        state: ISeatState.Vacant,
      },
    ],
  },
  {
    type: ISeatRowType.Normal,
    priceLabel: '₹750',
    priceVal: 750,
    rowName: 'D',
    rowSeats: [
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Disabled,
      },
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Reserved,
      },
      {
        state: ISeatState.Reserved,
      },
      {
        state: ISeatState.Vacant,
      },
    ],
  },
];
