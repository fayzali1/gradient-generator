import {
  Box,
  Card as MuiCard,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Button from "../button";
import GradientBox from "../gradientBox";
import Input from "../input";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Range from "../range";
import { useState } from "react";
const Card = () => {
  const classes = useStyles();
  const [angle, setAngle] = useState(0);
  const [colorPercentage, setColorPercentage] = useState({
    primary: 100,
    secondary: 0,
  });

  const handlePercentageChange = (e, value) => {
    setColorPercentage((prev) => ({
      ...prev,
      primary: value,
      secondary: 100 - value,
    }));
  };
  const handleAngleChange = (e, value) => {
    setAngle(value);
  };
  return (
    <MuiCard elevation={20} className={classes.root}>
      <Box className={classes.cardContentWrapper}>
        <CardContent>
          <Box className={classes.inputsWrapper}>
            <GradientBox />
          </Box>
        </CardContent>
        <CardContent>
          <Box className={classes.inputsWrapper}>
            <Box>
              <Input />
            </Box>
            <Box>
              <Input />
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
                onChange={handleAngleChange}
                step={1}
                valueLabelDisplay="off"
                name="angle"
                className={classes.range}
              />
            </Box>
            <Box className={classes.rangeWrapper}>
              <Typography variant="h6" className={classes.rangeValue}>
                {colorPercentage.primary}
              </Typography>
              <Range
                max={100}
                min={0}
                value={colorPercentage.primary}
                onChange={handlePercentageChange}
                step={1}
                valueLabelDisplay="off"
                name="angle"
                className={classes.range}
              />
              <Typography variant="h6" className={classes.rangeValue}>
                {colorPercentage.secondary}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.buttonWrapper}>
            <Button endIcon={<ChevronRightIcon />}>Apply</Button>
          </Box>
        </CardContent>
      </Box>
    </MuiCard>
  );
};

export default Card;

const useStyles = makeStyles((theme) => ({
  cardContentWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  root: {
    background: theme.palette.secondary.main,
    width: 400,
    height: "70vh",
  },
  inputsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  buttonWrapper: {
    padding: "20px 0 0 0 ",
  },
  range: {
    width: "120px !important ",
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
  },
  rangeSection: {},
}));
