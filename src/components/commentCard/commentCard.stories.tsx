import type { Meta, StoryObj } from "@storybook/react-vite";
import CommentCard from "./CommentCard";
import mockCommentCards from "../../data/mockCommentCards";

const meta = {
  component: CommentCard,
  tags: ['autodocs']
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    author: mockCommentCards[0].author,
    comment: mockCommentCards[0].comment
  }
}