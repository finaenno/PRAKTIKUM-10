import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const SidebarContext = createContext(null);

export const SidebarProvider = (props) => {
  const [isOpen, setOpen] = useLocalStorage('siebar-state');

  const onToggle = () => setOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, setOpen, onToggle }} {...props} />
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useCount must be used within a SidebarProvider');
  }
  return context;
};
