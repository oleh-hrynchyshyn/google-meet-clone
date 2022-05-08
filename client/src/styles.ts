import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	container: {
		padding: "10px 10px 0 10px",
		display: "grid",
		gridGap: "8px",
		gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
	},
});
