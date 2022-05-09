import React, { useState } from "react";

import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallEndIcon from "@mui/icons-material/CallEnd";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
//
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
import moment from "moment";
import { useInterval } from "react-use";

const Footer: React.FC = () => {
	const styles = useStyles();
	const [time, setTime] = useState(moment().format("HH:mm"));

	useInterval(() => {
		setTime(moment().format("HH:mm"));
	}, 1000);
	const menuIcon = [
		<BorderColorOutlinedIcon />,
		<DashboardIcon />,
		<FullscreenIcon />,
		<AutoAwesomeIcon />,
		<ClosedCaptionOffIcon />,
		<FeedbackIcon />,
		<ReportGmailerrorredIcon />,
		<TravelExploreIcon />,
		<SettingsOutlinedIcon />,
	];
	const middleIcons = [
		<MicIcon />,
		<VideocamIcon />,
		<PresentToAllIcon />,
		<MoreVertIcon />,
		<CallEndIcon />,
	];
	const leftIcons = [
		<InfoOutlinedIcon />,
		<GroupOutlinedIcon />,
		<ChatOutlinedIcon />,
		<GppMaybeOutlinedIcon />,
	];
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<span className={styles.time}>{time}</span> <span>uap-torr-dyd</span>
			</div>

			<div className={styles.middle}>
				{menuIcon.map((icon, index) => (
					<div className={styles.button} key={index}>
						{icon}
					</div>
				))}
			</div>

			<div className={styles.left}>
				{leftIcons.map((icon, index) => (
					<div className={`${styles.button} ${styles.buttonLeft}`} key={index}>
						{icon}
					</div>
				))}
			</div>
		</div>
	);
};

export default Footer;
