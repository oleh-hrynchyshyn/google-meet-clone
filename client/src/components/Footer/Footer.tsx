import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallEndIcon from "@mui/icons-material/CallEnd";

import { useStyles } from "./styles";
import moment from "moment";
import { useInterval } from "react-use";

const Footer: React.FC = () => {
	const styles = useStyles();

	const [time, setTime] = useState(moment().format("HH:mm"));

	useInterval(() => {
		setTime(moment().format("HH:mm"));
	}, 1000);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<span className={styles.time}>{time}</span> <span>uap-torr-dyd</span>
			</div>
			<div className={styles.middle}>
				<div className={styles.button}>
					<MicIcon />
				</div>
				<div className={styles.button}>
					<VideocamIcon />
				</div>
				<div className={styles.button}>
					<PresentToAllIcon />
				</div>
				<div className={styles.button}>
					<MoreVertIcon />
				</div>
				<div className={styles.button}>
					<CallEndIcon />
				</div>
			</div>

			<div>111</div>
		</div>
	);
};

export default Footer;
