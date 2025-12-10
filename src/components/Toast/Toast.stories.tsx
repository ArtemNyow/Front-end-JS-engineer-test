import type { Meta, StoryObj } from '@storybook/react';
import Toast, { type ToastType } from './Toast';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Успішне сповіщення
export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 3000,
  },
};

// Помилка
export const Error: Story = {
  args: {
    message: 'Something went wrong!',
    type: 'error',
    duration: 5000,
  },
};

// Інформаційне
export const Info: Story = {
  args: {
    message: 'New features available',
    type: 'info',
  },
};

// Попередження
export const Warning: Story = {
  args: {
    message: 'Your session will expire soon',
    type: 'warning',
    duration: 4000,
  },
};

// Довге повідомлення
export const LongMessage: Story = {
  args: {
    message:
      'This is a very long message that demonstrates how the toast component handles lengthy content. It should wrap properly.',
    type: 'info',
  },
};

// Всі типи
export const AllTypes: Story = {
  render: () => {
    const types: ToastType[] = [
      'success',
      'error',
      'info',
      'warning',
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          maxWidth: '800px',
        }}
      >
        {types.map(type => (
          <div
            key={type}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <h3
              style={{
                marginTop: 0,
                textTransform: 'capitalize',
              }}
            >
              {type}
            </h3>
            <Toast
              message={`This is a ${type} message`}
              type={type}
              duration={9999999} // Дуже довго, щоб можна було побачити
            />
          </div>
        ))}
      </div>
    );
  },
};

// Демонстрація інтерактивності
export const InteractiveDemo: Story = {
  render: function Render() {
    const [isVisible, setIsVisible] = useState(false);
    const [toastType, setToastType] =
      useState<ToastType>('info');
    const [message, setMessage] = useState(
      'Default message'
    );

    const showToast = (type: ToastType, msg: string) => {
      setToastType(type);
      setMessage(msg);
      setIsVisible(true);
    };

    return (
      <div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <button
            onClick={() =>
              showToast(
                'success',
                'Success! Operation completed.'
              )
            }
          >
            Show Success
          </button>
          <button
            onClick={() =>
              showToast(
                'error',
                'Error! Something went wrong.'
              )
            }
          >
            Show Error
          </button>
          <button
            onClick={() =>
              showToast(
                'info',
                'Info: Check out new features.'
              )
            }
          >
            Show Info
          </button>
          <button
            onClick={() =>
              showToast(
                'warning',
                'Warning: Action required.'
              )
            }
          >
            Show Warning
          </button>
        </div>

        {isVisible && (
          <div
            style={{
              position: 'relative',
              height: '100px',
            }}
          >
            <Toast
              message={message}
              type={toastType}
              duration={3000}
              onClose={() => setIsVisible(false)}
            />
          </div>
        )}
      </div>
    );
  },
};
