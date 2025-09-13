import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}

interface NavContextType {
  activeSession: string;
  setActiveSession: (id: string) => void;
}

const NavContext = createContext<NavContextType>({
  activeSession: "home",
  setActiveSession: () => {},
});

export const NavContextProvider: React.FC<Props> = ({ children }) => {
  const [activeSession, setActiveSession] = useState<string>("home");

  return (
    <NavContext.Provider value={{ activeSession, setActiveSession }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
