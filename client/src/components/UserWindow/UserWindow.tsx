import React from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

import MicOffIcon from "@mui/icons-material/MicOff";

import { useStyles } from "./styles";

const UserWindow: React.FC = () => {
	const styles = useStyles();
	return (
		<>
			<div className={styles.container}>
				<div className={styles.microphone}>
					<MicOffIcon sx={{ width: "18px", height: "18px" }} />
				</div>

				<div className={styles.avatar}>
					<Avatar sx={{ width: "5rem", height: "5rem" }} />
				</div>
				<div className={styles.name}>Oleh</div>
			</div>
		</>
	);
};

export default UserWindow;
