import type { Meta, StoryObj } from "@storybook/react-vite";
import {fn} from 'storybook/test';
import Button from "./Button";


const meta = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Текст кнопки который можно передать в props'
    },
    type: {
      control: {type: 'select'},
      options: ['button', 'submit'],
      description: 'Указывает тип кнопки'
    },
    disabled: {
      control: {type: 'boolean'},
      description: 'Указывает активность кнопки при валидации или ошибках полей заполнения'
    },
    onClick: {
      description: 'Обработчик клика'
    }
  },
  args: {
    text: 'Button text',
    type: 'button',
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primaty: Story = {};

export const FormButton: Story = {
  args: {
    type: 'submit'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}