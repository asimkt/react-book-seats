import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountdownTimer } from '.';

export default {
  title: 'Atoms/CountdownTimer',
  component: CountdownTimer,
} as ComponentMeta<typeof CountdownTimer>;

const Template: ComponentStory<typeof CountdownTimer> = args => (
  <CountdownTimer {...args} />
);

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

let expiredCalled = false;

export const ThreeDays = Template.bind({});
ThreeDays.args = {
  targetDate: dateTimeAfterThreeDays,
  onExpire: () => {
    console.log('expired');
  },
};

const TEN_SECONDS_IN_MS = 10 * 1000;
const dateTimeAfterTenSeconds = NOW_IN_MS + TEN_SECONDS_IN_MS;
export const TenSeconds = Template.bind({});
TenSeconds.args = {
  targetDate: dateTimeAfterTenSeconds,
  onExpire: () => {
    !expiredCalled && console.log('expired');
    expiredCalled = true;
  },
};
