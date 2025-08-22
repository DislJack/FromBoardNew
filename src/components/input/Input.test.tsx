import { render } from "@testing-library/react";
import Input from "./Input";
import type { FieldError } from "react-hook-form";
import styles from './input.module.css';

describe('Тестирование компонента Input', () => {
  const data = {
    type: 'text',
    value: 'value',
    placeholder: 'Имя',
    error: {
      type: 'requred',
      message: 'Это поле должно быть заполнено'
    } as FieldError
  }
  const setup = () => {
    const {getByTestId} = render(
      <Input 
        type={data.type} 
        value={data.value} 
        placeholder={data.placeholder} 
        onBlur={() => console.log()} 
        onChange={e => console.log(e)}
        error={data.error} 
      />
    );
    const parentElement = getByTestId('input').parentElement;
    const input = parentElement?.firstChild;
    const error = parentElement?.children[1];
    return {input, error}
  }

  test('Компонент верно отображается', () => {
    const {input} = setup();
    expect(input).toBeInTheDocument();
  });

  test('Placeholder совпадает с переданным значением', () => {
    const {input} = setup();
    expect(input).toHaveAttribute('placeholder', data.placeholder)
  });

  test('Ошибка отображается', () => {
    const {input, error} = setup();
    expect(input).toHaveClass(styles.input_error);
    expect(error).toBeInTheDocument();
  })
})