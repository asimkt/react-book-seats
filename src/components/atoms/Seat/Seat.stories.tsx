import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ISeatState } from 'types';

import { Seat } from '.';

export default {
  title: 'Atoms/Seat',
  component: Seat,
} as ComponentMeta<typeof Seat>;

const Template: ComponentStory<typeof Seat> = args => <Seat {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: ISeatState.Vacant,
};
export const Disabled = Template.bind({});
Disabled.args = {
  state: ISeatState.Disabled,
};
export const Reserved = Template.bind({});
Reserved.args = {
  state: ISeatState.Reserved,
};
export const NotApplicable = Template.bind({});
NotApplicable.args = {
  state: ISeatState.NotApplicable,
};
