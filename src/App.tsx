import { useState } from 'react';
import Input from './components/Input/Input';
import Toast, {
  type ToastType,
} from './components/Toast/Toast';
import SidebarMenu, {
  type MenuItem,
} from './components/SidebarMenu/SidebarMenu';
import './App.css';

function App() {
  const [toastConfig, setToastConfig] = useState<{
    visible: boolean;
    type: ToastType;
    message: string;
  }>({ visible: false, type: 'info', message: '' });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const menuItems: MenuItem[] = [
    { id: '1', label: 'Dashboard' },
    {
      id: '2',
      label: 'Products',
      children: [
        { id: '2-1', label: 'Clothing' },
        { id: '2-2', label: 'Footwear' },
        { id: '2-3', label: 'Accessories' },
        { id: '2-4', label: 'Electronics' },
      ],
    },
    {
      id: '3',
      label: 'Services',
      children: [
        { id: '3-1', label: 'Consulting' },
        { id: '3-2', label: 'Support' },
        { id: '3-3', label: 'Training' },
      ],
    },
    { id: '4', label: 'About Us' },
    { id: '5', label: 'Contact' },
  ];

  const showToast = (type: ToastType, message: string) => {
    setToastConfig({ visible: true, type, message });
  };

  const handleToastClose = () => {
    setToastConfig(prev => ({ ...prev, visible: false }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Component Library</h1>
        <p>A collection of reusable UI components</p>
      </header>

      <main className="app-main">
        <section className="component-section">
          <h2>1. Input Component</h2>
          <div className="component-demo">
            <Input
              type="password"
              placeholder="Enter your password..."
              clearable
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </div>
        </section>

        <section className="component-section">
          <h2>2. Toast Component</h2>
          <div className="button-group">
            <button
              onClick={() =>
                showToast(
                  'success',
                  'Operation completed successfully!'
                )
              }
              className="btn-success"
            >
              Show Success Toast
            </button>
            <button
              onClick={() =>
                showToast(
                  'error',
                  'Something went wrong! Please try again.'
                )
              }
              className="btn-error"
            >
              Show Error Toast
            </button>
            <button
              onClick={() =>
                showToast(
                  'info',
                  'New features are available! Check them out.'
                )
              }
              className="btn-info"
            >
              Show Info Toast
            </button>
            <button
              onClick={() =>
                showToast(
                  'warning',
                  'Your session will expire in 5 minutes.'
                )
              }
              className="btn-warning"
            >
              Show Warning Toast
            </button>
          </div>

          {toastConfig.visible && (
            <Toast
              message={toastConfig.message}
              type={toastConfig.type}
              duration={4000}
              onClose={handleToastClose}
            />
          )}
        </section>

        <section className="component-section">
          <h2>3. Sidebar Menu</h2>
          <button
            onClick={() => setSidebarOpen(true)}
            className="btn-primary"
          >
            Open Sidebar Menu
          </button>

          <SidebarMenu
            items={menuItems}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            title="Navigation"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
