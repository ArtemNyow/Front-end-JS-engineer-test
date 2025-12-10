import { useState } from 'react';
import styles from './SidebarMenu.module.css';
import SpriteIcon from '../SpriteIcon/SpriteIcon';

export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
}

const SidebarItem = ({ item }: { item: MenuItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren =
    item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={styles.menuItem}>
      <button
        className={styles.menuButton}
        onClick={handleClick}
        aria-expanded={isExpanded}
      >
        <span className={styles.menuButtonLabel}>
          {item.label}
        </span>
        {hasChildren && (
          <SpriteIcon
            name="icon-circle-down"
            className={`${styles.chevronIcon} ${isExpanded ? styles.expanded : ''}`}
          />
        )}
      </button>
      {hasChildren && (
        <div
          className={`${styles.subMenu} ${isExpanded ? styles.subMenuOpen : ''}`}
        >
          {item.children!.map(child => (
            <div
              key={child.id}
              className={styles.subMenuItem}
            >
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarMenu = ({
  isOpen,
  onClose,
  items,
  title = 'Menu',
}: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={onClose}
          role="presentation"
          aria-label="Close menu"
        />
      )}
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar menu"
      >
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <SpriteIcon
              name="icon-close"
              className={styles.icon}
            />
          </button>
        </div>
        <div className={styles.menuList}>
          {items.map(item => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
