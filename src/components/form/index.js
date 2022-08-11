import { Box, makeStyles, Slider, Typography } from "@material-ui/core";
import Input from "../input";
import Range from "../range";
import { types } from "../card/reducer";

const GradientForm = ({
  dispatch,
  state: { primaryColor, secondaryColor, angle, percentage },
}) => {
  const classes = useStyles();
  const handleDispatch = (type, value) => {
    dispatch({
      type,
      value,
    });
  };
  return (
    <>
      <Box className={classes.inputsWrapper}>
        <Box>
          <Input
            onChange={(event) =>
              handleDispatch(types.primaryColor, event.target.value)
            }
            value={primaryColor}
            name="primaryColor"
          />
        </Box>
        <Box>
          <Input
            onChange={(event) =>
              handleDispatch(types.secondaryColor, event.target.value)
            }
            value={secondaryColor}
            name="secondaryColor"
          />
        </Box>
      </Box>
      <Box className={classes.rangeSection}>
        <Box className={classes.rangeWrapper}>
          <Typography variant="h6" className={classes.rangeValue}>
            {angle} &#176;
          </Typography>
          <Range
            max={360}
            min={0}
            value={angle}
            onChange={(_, value) => handleDispatch(types.angle, value)}
            step={1}
            valueLabelDisplay="off"
            name="angle"
            className={classes.range}
          />
        </Box>
        <Box className={classes.rangeWrapper}>
          <div
            style={{ background: primaryColor }}
            className={classes.colorDisplay}
          />

          <Slider
            max={100}
            min={1}
            value={percentage}
            onChange={(_, value) => handleDispatch(types.percentage, value)}
            name="percentage"
            className={classes.range}
          />
          <div
            style={{ background: secondaryColor }}
            className={classes.colorDisplay}
          />
        </Box>
      </Box>
    </>
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
    width: 120,
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
}));
