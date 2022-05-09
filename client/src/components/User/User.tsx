import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useStyles } from "./styles";
type Props = {
	id: string;
	avatar: string;
	name: string;
};
const User: React.FC<any> = ({ data }) => {
	const styles = useStyles();

	return (
		<>
			<div
				className={styles.container}
				style={
					data.cameraOn
						? { backgroundImage: `url(${data.avatar})`, backgroundSize: "100%" }
						: {}
				}
			>
				<div className={styles.microphone}>
					<MicOffIcon sx={{ width: "18px", height: "18px" }} />
				</div>

				<div className={styles.avatar}>
					{!data.cameraOn ? (
						<Avatar
							sx={{ width: "5rem", height: "5rem", bgcolor: deepOrange[500] }}
							src={data.avatar}
						>
							{data.name[0]}
						</Avatar>
					) : (
						<></>
					)}
				</div>
				<div className={styles.name}>{data.name}</div>
			</div>
		</>
	);
};

export default User;
