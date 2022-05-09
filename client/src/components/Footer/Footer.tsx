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
import { useStyles } from "./styles";
import moment from "moment";
import { useInterval } from "react-use";

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
				{middleIcons.map((icon) => (
					<div className={styles.button}>{icon}</div>
				))}
			</div>

			<div className={styles.left}>
				{leftIcons.map((icon) => (
					<div className={`${styles.button} ${styles.buttonLeft}`}>{icon}</div>
				))}
			</div>
		</div>
	);
};

export default Footer;
