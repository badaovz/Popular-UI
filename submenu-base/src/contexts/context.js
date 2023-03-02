import { createContext, useContext, useState } from 'react';
import subLinks from '../asset/data';

const Context = createContext();

export default function SubmenuProvider({ children }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    const openSubmenu = (text, coordinates) => {
        const page = subLinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => setIsSubmenuOpen(false);
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    return (
        <Context.Provider
            value={{
                isSubmenuOpen,
                isSidebarOpen,
                openSubmenu,
                closeSubmenu,
                openSidebar,
                closeSidebar,
                page,
                location,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useSubmenuContext = () => {
    return useContext(Context);
};
