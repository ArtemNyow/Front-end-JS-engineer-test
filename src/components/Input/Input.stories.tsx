import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export const TextClearable: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'text',
    placeholder: 'Type something...',
    clearable: true,
  },
};

export const Password: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    clearable: true,
  },
};

export const Number: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
};

export const FilledExamples: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '300px',
      }}
    >
      <div>
        <h4>Text Input (filled)</h4>
        <Input
          type="text"
          value="Hello World"
          onChange={() => {}}
          placeholder="Enter text..."
        />
      </div>
      <div>
        <h4>Password Input (filled)</h4>
        <Input
          type="password"
          value="password123"
          onChange={() => {}}
          placeholder="Enter password..."
        />
      </div>
      <div>
        <h4>Password with Clear (filled)</h4>
        <Input
          type="password"
          value="password123"
          onChange={() => {}}
          placeholder="Enter password..."
          clearable
        />
      </div>
      <div>
        <h4>Number Input (filled)</h4>
        <Input
          type="number"
          value="42"
          onChange={() => {}}
          placeholder="Enter number..."
        />
      </div>
      <div>
        <h4>Clearable Input (filled)</h4>
        <Input
          type="text"
          value="Clear me"
          onChange={() => {}}
          placeholder="Type something..."
          clearable
        />
      </div>
    </div>
  ),
};

export const Demo: Story = {
  render: function Render() {
    const [textValue, setTextValue] = useState(
      'Pre-filled text'
    );
    const [passwordValue, setPasswordValue] =
      useState('mypassword123');
    const [numberValue, setNumberValue] = useState('42');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '300px',
        }}
      >
        <div>
          <h4>Text Input with Clear</h4>
          <Input
            type="text"
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            placeholder="Type text..."
            clearable
          />
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '5px',
            }}
          ></div>
        </div>

        <div>
          <h4>Password Input</h4>
          <Input
            type="password"
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            placeholder="Type password..."
            clearable
          />
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '5px',
            }}
          >
            Length: {passwordValue.length} characters
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '5px',
            }}
          >
            <small>Password: {passwordValue}</small>
          </div>
        </div>

        <div>
          <h4>Number Input</h4>
          <Input
            type="number"
            value={numberValue}
            onChange={e => setNumberValue(e.target.value)}
            placeholder="Enter number..."
          />
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '5px',
            }}
          >
            Value: {numberValue || '(empty)'}
          </div>
        </div>
      </div>
    );
  },
};

export const ClearButtonDemo: Story = {
  render: function Render() {
    const [value1, setValue1] = useState(
      'Try clearing this'
    );

    const [value3, setValue3] = useState('');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '400px',
        }}
      >
        <div>
          <h3>Демонстрація кнопки очищення</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Кнопка "X" з'являється коли поле не порожнє та
            clearable=true
          </p>
        </div>

        <div>
          <h4>Заповнене поле з clearable</h4>
          <Input
            type="text"
            value={value1}
            onChange={e => setValue1(e.target.value)}
            placeholder="Type something..."
            clearable
          />
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '5px',
            }}
          >
            Статус:{' '}
            {value1
              ? 'Є текст → кнопка видима'
              : 'Порожньо → кнопка схована'}
          </div>
        </div>

        <div>
          <h4>Порожнє поле з clearable</h4>
          <Input
            type="text"
            value={value3}
            onChange={e => setValue3(e.target.value)}
            placeholder="Type here to show clear button..."
            clearable
          />
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '5px',
            }}
          >
            Покрокова інструкція:
            <ol style={{ margin: '5px 0 0 20px' }}>
              <li>
                Початковий стан: поле порожнє - кнопки немає
              </li>
              <li>Введіть текст - з'явиться кнопка "X"</li>
              <li>
                Натисніть "X" - поле очиститься, кнопка
                зникне
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '400px',
      }}
    >
      <div>
        <h4>Empty States:</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Input
            type="text"
            value=""
            onChange={() => {}}
            placeholder="Empty text input"
          />
          <Input
            type="password"
            value=""
            onChange={() => {}}
            placeholder="Empty password input"
          />
          <Input
            type="text"
            value=""
            onChange={() => {}}
            placeholder="Empty clearable input"
            clearable
          />
        </div>
      </div>

      <div>
        <h4>Filled States:</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Input
            type="text"
            value="Some text"
            onChange={() => {}}
            placeholder="Text input"
            clearable
          />
          <Input
            type="password"
            value="mypassword"
            onChange={() => {}}
            placeholder="Password input"
            clearable
          />
          <Input
            type="number"
            value="123"
            onChange={() => {}}
            placeholder="Number input"
          />
        </div>
      </div>

      <div>
        <h4>Interactive Demo:</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '14px',
              }}
            >
              Try typing to see clear button:
            </label>
            <Input
              type="text"
              value=""
              onChange={() => {}}
              placeholder="Type here..."
              clearable
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '14px',
              }}
            >
              Click eye icon to toggle password visibility:
            </label>
            <Input
              type="password"
              value=""
              onChange={() => {}}
              placeholder="Enter password..."
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
