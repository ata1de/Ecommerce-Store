import React, { ReactNode, createContext, useState } from "react";

interface SideBarProviderProps {
    children: ReactNode;
}

interface ValueProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleCloser: () => void;
}

export const SideBarContext = createContext<ValueProps | undefined>(undefined);

const SideBarProvider: React.FC<SideBarProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloser = () => {
        setIsOpen(false);
    };

    const value: ValueProps = {
        isOpen,
        setIsOpen,
        handleCloser,
    };

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarProvider;

