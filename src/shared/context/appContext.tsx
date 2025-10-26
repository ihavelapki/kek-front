import { createContext, useContext, useState, type ReactNode } from "react";

export type AppContextType = "home" | "cinema" | "radio";

interface ContextValue {
  currentApp: AppContextType;
  setApp: (app: AppContextType) => void;
}

const AppContext = createContext<ContextValue | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentApp, setApp] = useState<AppContextType>("home");

  return (
    <AppContext.Provider value={{ currentApp, setApp }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): ContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
};
