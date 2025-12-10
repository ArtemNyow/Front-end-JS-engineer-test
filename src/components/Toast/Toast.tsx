import { useEffect, useState } from 'react';
import styles from './Toast.module.css';
import SpriteIcon from '../SpriteIcon/SpriteIcon';

export type ToastType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.content}>{message}</div>
      <button
        className={styles.closeBtn}
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
      >
        <SpriteIcon
          name="icon-close"
          className={styles.icon}
        />
      </button>
    </div>
  );
};

export default Toast;
