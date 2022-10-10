import React from "react";
import { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { Chats } from "./Chats";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

export const Sidebar = () => {
  const { sidebarOpen } = useContext(SideBarContext);
  return (
    <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};
