import { makeStyles } from "@material-ui/core";

const Input = (props) => {
  const classes = useStyles();
  return (
    <>
      <input type="color" className={classes.input} {...props} />
    </>
  );
};

export default Input;

const useStyles = makeStyles(() => ({
  input: {
    outline: "none",
    border: "none",
    height: 40,
    width: 60,
    borderRadius: 10,

    "&::-webkit-color-swatch-wrapper": {
      padding: 0,
    },
    "&::-webkit-color-swatch": {
      borderRadius: 10,
      outline: "none",
      border: "none",
    },

    "&::-moz-color-swatch-wrapper": {
      padding: 0,
    },
    "&::-moz-color-swatch": {
      borderRadius: 10,
    },
  },
}));
