import type { Meta, StoryObj } from "@storybook/react-vite";
import GaranteeCard from "./GaranteeCard";
import mockGarateeCards from "../../data/mockGarateeCard";

const meta = {
  component: GaranteeCard,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: {type: 'text'},
      description: 'Адрес фотографии отображаемой в компоненте'
    },
    caption: {
      control: {type: 'text'},
      description: 'Текст подписи под картинкой'
    }
  }
} satisfies Meta<typeof GaranteeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: mockGarateeCards[0].src,
    caption: mockGarateeCards[0].caption
  }
}