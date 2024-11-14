import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { romaneioTypeNormalize } from "../types/romaneio";

// Define the type for the context value
export interface GlobalContextType {
  romaneioData: romaneioTypeNormalize[] | null;
  setRomaneioData: Dispatch<SetStateAction<any[] | null>>;
  currentRomaneio: romaneioTypeNormalize | null;
  setCurrentRomaneio: Dispatch<SetStateAction<romaneioTypeNormalize | null>>;
  showModal: string;
  setShowModal: Dispatch<SetStateAction<string>>;
}

// Define the type for the props that will be passed to the provider component
interface GlobalStorageProps {
  children: ReactNode;
}

// Create the context with an initial undefined value
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// Create the provider component
export const GlobalStorage: React.FC<GlobalStorageProps> = ({ children }) => {
  // Initialize the state with null or an appropriate initial value
  const [romaneioData, setRomaneioData] = useState<
    romaneioTypeNormalize[] | null
  >(null);
  const [showModal, setShowModal] = useState<string>("");
  const [currentRomaneio, setCurrentRomaneio] = useState<romaneioTypeNormalize | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        romaneioData,
        setRomaneioData,
        showModal,
        setShowModal,
        currentRomaneio,
        setCurrentRomaneio,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Export a custom hook for easier context usage
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalStorage");
  }
  return context;
};

export default GlobalContext;
