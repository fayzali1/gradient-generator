import { makeStyles } from "@material-ui/core";

const GradientBox = ({ formik }) => {
  const classes = useStyles();
  const { primaryColor, secondaryColor, angle, percentage } = formik.values;

  return (
    <div
      className={classes.gradientBox}
      style={{
        background: `linear-gradient(${angle}deg,${primaryColor} ${percentage}%,${secondaryColor} ${
          100 - percentage
        }%)`,
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
