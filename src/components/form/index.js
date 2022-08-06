import { Box, makeStyles, Typography } from "@material-ui/core";
import Input from "../input";
import Range from "../range";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "../button";

const GradientForm = ({ formik }) => {
  const classes = useStyles();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className={classes.inputsWrapper}>
        <Box>
          <Input
            onChange={formik.handleChange}
            value={formik.values.primaryColor}
            name="primaryColor"
          />
        </Box>
        <Box>
          <Input
            onChange={formik.handleChange}
            value={formik.values.secondaryColor}
            name="secondaryColor"
          />
        </Box>
      </Box>
      <Box className={classes.rangeSection}>
        <Box className={classes.rangeWrapper}>
          <Typography variant="h6" className={classes.rangeValue}>
            {formik.values.angle} &#176;
          </Typography>
          <Range
            max={360}
            min={0}
            value={formik.values.angle}
            onChange={formik.handleChange}
            step={1}
            valueLabelDisplay="off"
            name="angle"
            className={classes.range}
          />
        </Box>
        <Box className={classes.rangeWrapper}>
          <div
            style={{ background: formik.values.primaryColor }}
            className={classes.colorDisplay}
          />
          <Range
            max={100}
            min={0}
            value={formik.values.percentage}
            onChange={formik.handleChange}
            step={1}
            valueLabelDisplay="off"
            name="percentage"
            className={classes.range}
          />
          <div
            style={{ background: formik.values.secondaryColor }}
            className={classes.colorDisplay}
          />
        </Box>
      </Box>
    </form>
  );
};

export default GradientForm;

const useStyles = makeStyles((theme) => ({
  inputsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  buttonWrapper: {
    padding: "20px 0 0 0 ",
  },
  range: {
    width: "120px !important",
    height: 5,
    "&::-webkit-slider-runnable-track": {
      width: "100%",
      height: 5,
      cursor: "pointer",
      animate: "0.2s",
      borderRadius: 5,
      backgroundColor: " #85FFBD",
      backgroundImage: "linear-gradient(45deg, #FF3CAC 0%, #784BA0 100%)",
    },
    "&::-webkit-slider-thumb": {
      height: 20,
      width: 10,
      borderRadius: 5,
      background: "#FFFFFF",
      cursor: "pointer",
      "-webkit-appearance": "none",
      marginTop: -5,
    },
  },
  rangeValue: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  rangeWrapper: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    padding: "10px 0 0 0 ",
    alignItems: "center",
  },
  colorDisplay: {
    height: 20,
    width: 20,
    borderRadius: "50%",
  },
  rangeSection: {},
}));
