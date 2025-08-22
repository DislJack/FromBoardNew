import { render } from "@testing-library/react";
import GaranteeCard from "./GaranteeCard";
import mockGarateeCards from "../../data/mockGarateeCard";

describe('Тестирование компонента GaranteeCard', () => {
  const setup = () => {
    const data = {
      src: mockGarateeCards[0].src,
      caption: mockGarateeCards[0].caption
    };
    const {getByTestId} = render(
      <GaranteeCard src={data.src} caption={data.caption} />
    );
    const image = getByTestId('garantee');
    const caption = image.nextSibling;
    const card = image.parentElement;
    return {card, caption};
  }

  test('Компонент отображается корректно', () => {
    const {card} = setup();
    expect(card).toBeInTheDocument();
  });

  test('Лейбл переданный в компонент отображается верно', () => {
    const {caption} = setup();
    expect(caption).toHaveTextContent(mockGarateeCards[0].caption)
  })
})