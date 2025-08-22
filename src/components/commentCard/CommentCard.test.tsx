import { render, within } from "@testing-library/react"
import CommentCard from "./CommentCard"
import mockCommentCards from "../../data/mockCommentCards"

describe('Тестирование компонента CommentCard', () => {
  const setup = () => {
    const {getByTestId} = render(
      <CommentCard author={mockCommentCards[0].author} comment={mockCommentCards[0].comment} />
    );

    const commentCard = getByTestId('comment-card');
    const commentCardWithin = within(commentCard);
    const author = commentCardWithin.getByText(mockCommentCards[0].author);
    const comment = commentCardWithin.getByText(mockCommentCards[0].comment);
    return {commentCard, author, comment}
  }

  test('Компонент верно отображается', () => {
    const {commentCard} = setup();

    expect(commentCard).toBeInTheDocument()
  });

  test('Данные переданные в компонент отображаются корректно', () => {
    const {author, comment} = setup();

    expect(author).toBeInTheDocument();
    expect(comment).toBeInTheDocument();
    expect(author).toHaveTextContent(mockCommentCards[0].author);
    expect(comment).toHaveTextContent(mockCommentCards[0].comment)
  })
})