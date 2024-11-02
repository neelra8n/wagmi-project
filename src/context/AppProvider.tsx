import React, { createContext, useContext } from "react";
import { sidebar } from "./helper";
import { useAccount, useConnect, useDisconnect } from "wagmi";
interface AppState {
  theme?: string;
  sidebar: MenuStructure;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const  account = useAccount();
  const { address, isConnected, chain, chainId }  =  account;
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    if (isConnected) {
      disconnect();
      return;
    }
    connect({connector : connectors[1]});
  };

  console.log(account);
  return (
    <AppStateContext.Provider
      value={{
        sidebar,
        address,
        isConnected,
        connect: handleConnect,
        disconnect,
        connectors,
        account
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

export default AppProvider;