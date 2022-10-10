import { createContext, useState } from "react";

export const SideBarContext = createContext();
export const SideBarContextProvider = ({ children }) => {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const changeSideBarOpen = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <SideBarContext.Provider value={{ sidebarOpen, changeSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};
