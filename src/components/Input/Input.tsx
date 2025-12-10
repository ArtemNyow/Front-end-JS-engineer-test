import { useState, type ChangeEvent } from 'react';
import styles from './Input.module.css';
import SpriteIcon from '../SpriteIcon/SpriteIcon';

interface InputProps {
  type?: 'text' | 'password' | 'number';
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  placeholder?: string;
}

const Input = ({
  type = 'text',
  value,
  onChange,
  clearable = false,
  placeholder,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: '' },
      } as ChangeEvent<HTMLInputElement>);
    }
  };

  const togglePassword = () =>
    setShowPassword(prev => !prev);
  const inputType =
    type === 'password' && showPassword ? 'text' : type;

  const showPasswordToggle = type === 'password';
  const showClearButton = clearable && value.length > 0;
  const hasIcons = showPasswordToggle || showClearButton;

  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${hasIcons ? styles.hasIcons : ''}`}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {hasIcons && (
        <div className={styles.actionWrapper}>
          {showPasswordToggle && (
            <button
              type="button"
              className={styles.iconButton}
              onClick={togglePassword}
              aria-label={
                showPassword
                  ? 'Hide password'
                  : 'Show password'
              }
            >
              <SpriteIcon
                className={styles.icon}
                name={
                  showPassword ? 'icon-eye-off' : 'icon-eye'
                }
              />
            </button>
          )}

          {showClearButton && (
            <button
              type="button"
              className={styles.iconButton}
              onClick={handleClear}
              aria-label="Clear input"
            >
              <SpriteIcon
                className={styles.icon}
                name="icon-close"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
