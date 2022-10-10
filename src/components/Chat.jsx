import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { Messages } from "./Messages";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";
import { SideBarContext } from "../context/SideBarContext";
export const Chat = () => {
  const { data } = useContext(ChatContext);
  const { sidebarOpen, changeSideBarOpen } = useContext(SideBarContext);
  const handleBack = () => {
    changeSideBarOpen(!sidebarOpen);
  };
  return (
    <div className="chat">
      <div className="chatInfo">
        <i onClick={handleBack} className="chatInfoBack">
          <ArrowBackIcon />
        </i>
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
