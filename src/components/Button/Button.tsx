import styles from './button.module.css';

export type TButton = {
  text: string;
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({text, type, disabled, onClick}: TButton) {
  return (
    <button 
      className={`${styles.button} ${type === 'submit' ? styles.form_button : ''}`} 
      type={type} 
      disabled={disabled} 
      onClick={onClick} 
      data-testid='button'>
        {text}
    </button>
  )
}

export default Button;