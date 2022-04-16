import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Seat } from '.';
import { SeatState } from './Seat';

export default {
  title: 'Atoms/Seat',
  component: Seat,
} as ComponentMeta<typeof Seat>;

const Template: ComponentStory<typeof Seat> = args => <Seat {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: SeatState.Vacant,
};
export const Disabled = Template.bind({});
Disabled.args = {
  state: SeatState.Disabled,
};
export const Selected = Template.bind({});
Selected.args = {
  state: SeatState.Selected,
};
export const Reserved = Template.bind({});
Reserved.args = {
  state: SeatState.Reserved,
};
export const NotApplicable = Template.bind({});
NotApplicable.args = {
  state: SeatState.NotApplicable,
};
