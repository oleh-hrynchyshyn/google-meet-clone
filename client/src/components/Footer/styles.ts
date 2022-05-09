import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    margin: "12px",
    width: "calc(100% - 24px)",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    color: "#ffffff",
    lineHeight: 1,
    bottom: "10px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "1 1 25%",
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
    flex: "1 1 25%",
  },
  button: {
    margin: "0 8px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    justifyContent: "center",
    backgroundColor: "#36373a",
    "&:hover": {
      backgroundColor: "#3f4145",
    },
  },
  buttonLast: {
    padding: "0 6px",
    borderRadius: "20px",
    backgroundColor: "#ea4335",
    "&:hover": {
      backgroundColor: "#ed5b4e",
    },
  },
  buttonLeft: {
    backgroundColor: "#202124",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "1 1 25%",
  },
});
