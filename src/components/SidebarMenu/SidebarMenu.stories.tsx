import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu, { type MenuItem } from './SidebarMenu';
import { useState } from 'react';

const sampleItems: MenuItem[] = [
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
      {
        id: '3-4',
        label: 'Development',
        children: [
          { id: '3-4-1', label: 'Frontend' },
          { id: '3-4-2', label: 'Backend' },
          { id: '3-4-3', label: 'Mobile' },
        ],
      },
    ],
  },
  { id: '4', label: 'About Us' },
  { id: '5', label: 'Contact' },
];

const simpleItems: MenuItem[] = [
  { id: '1', label: 'Home' },
  { id: '2', label: 'Profile' },
  { id: '3', label: 'Settings' },
  { id: '4', label: 'Logout' },
];

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    items: sampleItems,
    title: 'Navigation',
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    items: sampleItems,
    title: 'Menu',
  },
};

export const SimpleMenu: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    items: simpleItems,
    title: 'Simple Menu',
  },
};

export const WithExpandedSubmenu: Story = {
  render: () => {
    const itemsWithDefaultOpen: MenuItem[] = [
      { id: '1', label: 'Home' },
      {
        id: '2',
        label: 'Products',
        children: [
          { id: '2-1', label: 'Clothing' },
          { id: '2-2', label: 'Footwear' },
        ],
      },
      { id: '3', label: 'About' },
    ];

    return (
      <SidebarMenu
        isOpen={true}
        onClose={() => {}}
        items={itemsWithDefaultOpen}
        title="Products Menu"
      />
    );
  },
};

export const InteractiveDemo: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuItems, setMenuItems] = useState(sampleItems);

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{ marginRight: '10px' }}
          >
            Open Sidebar
          </button>
          <button
            onClick={() => setMenuItems(simpleItems)}
            style={{ marginRight: '10px' }}
          >
            Load Simple Menu
          </button>
          <button onClick={() => setMenuItems(sampleItems)}>
            Load Complex Menu
          </button>
        </div>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={menuItems}
          title="Demo Menu"
        />

        <div
          style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <h3>Current Menu Items:</h3>
          <pre
            style={{
              background: '#fff',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            {JSON.stringify(menuItems, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

export const DifferentTitles: Story = {
  render: () => {
    const titles = [
      'Navigation',
      'Menu',
      'Settings',
      'Profile',
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
      >
        {titles.map(title => (
          <div
            key={title}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <h3>Title: "{title}"</h3>
            <div
              style={{
                height: '400px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <SidebarMenu
                isOpen={true}
                onClose={() => {}}
                items={simpleItems}
                title={title}
              />
            </div>
          </div>
        ))}
      </div>
    );
  },
};
