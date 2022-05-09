import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	container: {
		margin: "12px",
		width: "calc(100% - 24px)",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		position: "fixed",
		color: "#ffffff",
		lineHeight: 1,
		bottom: 0,
	},
	left: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	time: {
		margin: "0 12px",
		padding: "0 12px 0 0",
		borderRight: "1px solid #ffffff",
	},
	middle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		margin: "0 8px",
		width: "40px",
		height: "40px",
		display: "flex",
		alignItems: "center",
		borderRadius: "50%",
		justifyContent: "center",
		backgroundColor: "#36373a",
		"&:hover": {
			cursor: "pointer",
			backgroundColor: "#3f4145",
		},
	},
	buttonLeft: {
		backgroundColor: "#202124",
	},
});
