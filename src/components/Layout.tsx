import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import { useAppState } from "../context/AppProvider";

const Layout = ({ children }) => {
  const { sidebar } = useAppState();
  return (
    <div>
      <Header />
      <Drawer config={sidebar} />
      {children}
    </div>
  );
};

export default Layout;
