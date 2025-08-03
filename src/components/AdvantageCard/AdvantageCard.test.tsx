import AdvantageCard from "./AdvantageCard";
import {render, within} from '@testing-library/react';
import mockCards from "../../data/mockAdvantageCard";

describe('Тестирование компонента advantageCard', () => {
  const setup = () => {
    const {getByTestId} = render(
      <AdvantageCard icon={mockCards[0].icon} title={mockCards[0].title} text={mockCards[0].text} />
    );
    const card = getByTestId('advantage-card')
    const cardWithin = within(card);
    const title = cardWithin.getByText(mockCards[0].title);
    const text = cardWithin.getByText(mockCards[0].text);
    return {card, title, text}
  }

  test('Компонент отображается', () => {
    const {card} = setup();
    expect(card).toBeInTheDocument();
  });

  test('Компонент отображает корректные данные', () => {
    const {title, text} = setup();
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(mockCards[0].title)
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(mockCards[0].text);
  })
})