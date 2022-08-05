import { Box, makeStyles } from "@material-ui/core";

const GradientBox = () => {
  const classes = useStyles();
  return <Box className={classes.gradientBox} />;
};

export default GradientBox;

const useStyles = makeStyles(() => ({
  gradientBox: {
    height: 150,
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 10,
  },
}));
