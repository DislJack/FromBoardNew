import { useState } from "react";
import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { FieldError } from "react-hook-form";
import {fn} from 'storybook/test'

const meta = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'tel'],
      description: 'Тип поля ввода'
    },
    placeholder: {
      control: 'text',
      description: 'Текстовое описание placeholder'
    },
    error: {
      control: 'object',
      description: 'Объект ошибки из reack-hook-form'
    },
    value: {
      control: 'text'
    }
  },
  args: {
    placeholder: 'Случайный плейсхолдер',
    value: '',
    type: 'text',
    onBlur: fn()
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onChange: fn()
  }
}

export const WithError: Story = {
  args: {
    onChange: fn(),
    error: {
      type: 'required',
      message: 'Это поле обязательно для заполнения'
    } as FieldError
  }
}

export const Controlled: Story = {
  args: {
    onChange: fn(),
    value: ""
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || '')
    return (
      <Input 
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  }
}