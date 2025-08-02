import type { Meta, StoryObj } from '@storybook/react-vite';

import AdvantageCard from './AdvantageCard';
import mockCards from '../../data/mockAdvantageCard';

const meta = {
  component: AdvantageCard,
  tags: ['autodocs']
} satisfies Meta<typeof AdvantageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstCard: Story = {
  args: {
    title: mockCards[0].title,
    text: mockCards[0].text,
    icon: mockCards[0].icon
  }
};

export const SecondCard: Story = {
  args: {
    title: mockCards[1].title,
    text: mockCards[1].text,
    icon: mockCards[1].icon
  }
};

export const ThirdCard: Story = {
  args: {
    title: mockCards[2].title,
    text: mockCards[2].text,
    icon: mockCards[2].icon
  }
};

export const FourthCard: Story = {
  args: {
    title: mockCards[3].title,
    text: mockCards[3].text,
    icon: mockCards[3].icon
  }
};

export const FifthCard: Story = {
  args: {
    title: mockCards[4].title,
    text: mockCards[4].text,
    icon: mockCards[4].icon
  }
};

export const SixthCard: Story = {
  args: {
    title: mockCards[5].title,
    text: mockCards[5].text,
    icon: mockCards[5].icon
  }
};