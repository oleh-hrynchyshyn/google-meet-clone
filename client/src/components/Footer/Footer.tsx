import React, { useState } from "react";
import { useInterval } from "react-use";
import moment from "moment";
import Menu from "../Menu";

import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallEndIcon from "@mui/icons-material/CallEnd";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

import { useStyles } from "./styles";

const Footer: React.FC = () => {
  const styles = useStyles();
  const [time, setTime] = useState(moment().format("HH:mm"));

  useInterval(() => {
    setTime(moment().format("HH:mm"));
  }, 1000);

  const middleIcons = [
    <MicIcon />,
    <VideocamIcon />,
    <PresentToAllIcon />,
    <MoreVertIcon />,
    <CallEndIcon />,
  ];
  const rightIcons = [
    <InfoOutlinedIcon />,
    <GroupOutlinedIcon />,
    <ChatOutlinedIcon />,
    <WidgetsOutlinedIcon />,
    <GppMaybeOutlinedIcon />,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.time}>{time}</span> <span>uap-torr-dyd</span>
      </div>

      <div className={styles.middle}>
        {middleIcons.map((icon, index) => {
          const isMenu = index === 3;
          const isEnd = index === 4;

          if (isMenu) {
            return (
              <Menu key={index}>
                {(id, handleClick) => {
                  return (
                    <div
                      key={index}
                      aria-describedby={id}
                      // @ts-ignore
                      onClick={handleClick}
                      className={`${styles.button} ${
                        isEnd ? styles.buttonLast : {}
                      }`}
                    >
                      {icon}
                    </div>
                  );
                }}
              </Menu>
            );
          }

          return (
            <div
              key={index}
              className={`${styles.button} ${isEnd ? styles.buttonLast : {}}`}
            >
              {icon}
            </div>
          );
        })}
      </div>

      <div className={styles.right}>
        {rightIcons.map((icon, index) => (
          <div className={`${styles.button} ${styles.buttonLeft}`} key={index}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
