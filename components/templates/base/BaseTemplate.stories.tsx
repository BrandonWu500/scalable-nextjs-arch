// BaseTemplate.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { BaseTemplate } from './BaseTemplate';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BaseTemplate> = {
  component: BaseTemplate,
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
