import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ISeatState, ISeatRowType } from 'types';

import { SeatGrid } from '.';

export default {
  title: 'Molecules/SeatGrid',
  component: SeatGrid,
} as ComponentMeta<typeof SeatGrid>;

const Template: ComponentStory<typeof SeatGrid> = args => (
  <SeatGrid {...args} />
);

const seatsData = [
  {
    type: ISeatRowType.Premium,
    price: 1000,
    rowSeats: [
      {
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
        state: ISeatState.NotApplicable,
      },
    ],
  },
  {
    type: ISeatRowType.Normal,
    price: 750,
    rowSeats: [
      {
        state: ISeatState.Vacant,
      },
      {
        state: ISeatState.Selected,
      },
      {
        state: ISeatState.Reserved,
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
    ],
  },
  {
    type: ISeatRowType.Normal,
    price: 750,
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

export const Default = Template.bind({});
Default.args = {
  seatsData,
};
