import React, { useState, Fragment } from "react";
import Popover from "@mui/material/Popover";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FeedbackIcon from "@mui/icons-material/Feedback";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import { useStyles } from "./styles";
import Modal from "../Modal";

type Props = {
  children: (
    id: string | undefined,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  ) => JSX.Element;
};

const Menu: React.FC<Props> = (props) => {
  const { children } = props;

  const styles = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [modalContent, setModalContent] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [
    {
      title: "Дошка для конференцій",
      subtitle: "Відкрити файл Jam",
      icon: <BorderColorOutlinedIcon />,
    },
    { title: "Змінити макет", icon: <DashboardIcon /> },
    { title: "Повноекранний режим", icon: <FullscreenIcon /> },
    { title: "Застосувати візуальні ефекти", icon: <AutoAwesomeIcon /> },
    { title: "Увімкнути субтитри", icon: <ClosedCaptionOffIcon /> },
    { title: "Повідомити про проблему", icon: <FeedbackIcon /> },
    { title: "Повідомити про порушення", icon: <ReportGmailerrorredIcon /> },
    { title: "Вирішення проблем і довідка", icon: <TravelExploreIcon /> },
    { title: "Налаштування", icon: <SettingsOutlinedIcon /> },
  ];

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {modalContent && (
        <Modal modalContent={modalContent} setModalContent={setModalContent} />
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={styles.popover}
      >
        <MenuList>
          {data.map((el, index) => {
            return (
              <Fragment key={el.title}>
                <MenuItem
                  onClick={() => {
                    setModalContent(el.title);
                  }}
                >
                  <ListItemIcon>{el.icon}</ListItemIcon>
                  <ListItemText
                    className={styles.title}
                    primary={el.title}
                    secondary={el.subtitle}
                    sx={{ marginLeft: "20px" }}
                    primaryTypographyProps={{
                      fontSize: "15px",
                    }}
                    secondaryTypographyProps={{
                      fontSize: "12px",
                    }}
                  />
                </MenuItem>
                {index === 4 && <Divider />}
              </Fragment>
            );
          })}
        </MenuList>
      </Popover>

      {children(id, handleClick)}
    </>
  );
};

export default Menu;
