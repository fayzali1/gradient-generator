import { makeStyles } from "@material-ui/core";

const GradientBox = ({
  state: { primaryColor, secondaryColor, angle, percentage },
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.gradientBox}
      style={{
        background: `linear-gradient(${angle}deg,${primaryColor} ${percentage[0]}%,${secondaryColor} ${percentage[1]}%)`,
      }}
    />
  );
};

export default GradientBox;

const useStyles = makeStyles(() => ({
  gradientBox: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
}));
