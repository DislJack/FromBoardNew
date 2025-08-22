import { render } from "@testing-library/react";
import Button, { type TButton } from "./Button";
import userEvent from "@testing-library/user-event";

describe('Тестирование компонента Button', () => {
  const data: TButton = {
    text: 'Button text',
    type: "button",
    onClick: vi.fn()
  }
  const setup = () => {
    const {getByTestId} = render(
      <Button text={data.text} type={data.type} onClick={data.onClick} />
    );
    const user = userEvent.setup();

    const button = getByTestId('button');
    return {button, user};
  }

  test('Компонент отображается', () => {
    const {button} = setup();
    expect(button).toBeInTheDocument();
  });

  test('Текст на кнопке идентичен тому что передан в пропсах', () => {
    const {button} = setup();
    expect(button).toHaveTextContent(data.text);
  });

  test('При нажатии на кнопку выполняется функция, которая передаётся в компонент', async () => {
    const {button, user} = setup();
    
    await user.click(button);

    expect(data.onClick).toHaveBeenCalled();
  })
})