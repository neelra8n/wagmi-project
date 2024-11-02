import React from "react";
import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "./index.css";
import { AppProvider } from "./context/AppProvider.tsx";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </QueryClientProvider>
  </WagmiProvider>
);
