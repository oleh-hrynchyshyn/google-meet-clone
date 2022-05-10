import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useStyles } from "./styles";
import { IUser } from "../../interfaces/user";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "../../redux/rootReducer";
import { getPhotoRequest } from "../../redux/photos/actions";
const User: React.FC<IUser> = ({ id, avatar, name, cameraOn }) => {
	const styles = useStyles();
	const [link1, setLink] = useState<string>(avatar);
	const [userId, setUserId] = useState("");
	const [isCameraOn, setIsCameraOn] = useState<boolean>(cameraOn);
	const dispatch = useDispatch();
	const { link } = useSelector((state: IRootReducer) => state.photo);

	const handleClick = () => {
		dispatch(getPhotoRequest());
		setUserId(id);
	};

	useEffect(() => {
		if (link && id === userId) {
			setLink(link);
			setIsCameraOn(true);
			setUserId("");
		}
	}, [link]);

	return (
		<>
			<div
				className={styles.container}
				style={
					isCameraOn
						? {
								backgroundImage: `url(${link1})`,
								backgroundSize: "100%",
						  }
						: {}
				}
				onClick={handleClick}
			>
				<div className={styles.microphone}>
					<MicOffIcon sx={{ width: "18px", height: "18px" }} />
				</div>

				<div className={styles.avatar}>
					{!isCameraOn ? (
						<Avatar
							sx={{ width: "5rem", height: "5rem", bgcolor: deepOrange[500] }}
							src={avatar}
						>
							{name[0]}
						</Avatar>
					) : (
						<></>
					)}
				</div>
				<div className={styles.name}>{name}</div>
			</div>
		</>
	);
};

export default User;
