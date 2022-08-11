import { Box, makeStyles, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

const GradientRule = ({
  state: { primaryColor, secondaryColor, angle, percentage },
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const rule = `background:linear-gradient(${angle}deg,${primaryColor} ${percentage[0]}%,${secondaryColor} ${percentage[1]}%)`;

  const handleSnackClose = () => {
    setOpen(false);
  };

  const handleRuleCopy = () => {
    navigator.clipboard
      .writeText(rule)
      .then(() => {
        setAlertMessage("Rule Copied!");
      })
      .catch(() => {
        setAlertMessage("Could not copy rule!");
      });
    setOpen(true);
  };
  return (
    <>
      <Box className={classes.container}>
        <code>{rule}</code>
        <button onClick={handleRuleCopy} className={classes.button}>
          Copy
        </button>
      </Box>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleSnackClose}>
        <MuiAlert severity="success">{alertMessage}</MuiAlert>
      </Snackbar>
    </>
  );
};

export default GradientRule;

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    background: "#fff",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    border: "none",
    outline: "none",
    background: "#aad6ee",
    padding: 5,
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      background: "#aad6ee",
    },
  },
}));
