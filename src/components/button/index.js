import { Button as MuiButton, withStyles } from "@material-ui/core";

const Button = withStyles((theme) => ({
  root: {
    width: 120,
    background: theme.palette.tertiary.main,
    border: "none",
    color: "#ffffff96",
    letterSpacing: "0.2rem",
    fontWeight: "bold",
    borderRadius: 55,
    "& .MuiSvgIcon-root": {
      fill: "#c685d6",
    },
    "&:hover": {
      background: theme.palette.secondary.dark,
    },
  },
}))(MuiButton);

export default Button;
