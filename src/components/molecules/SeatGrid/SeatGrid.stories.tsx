import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SeatGrid } from '.';
import { dummySeatsData } from './dummy';

export default {
  title: 'Molecules/SeatGrid',
  component: SeatGrid,
} as ComponentMeta<typeof SeatGrid>;

const Template: ComponentStory<typeof SeatGrid> = args => (
  <SeatGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  seatsData: dummySeatsData,
};
