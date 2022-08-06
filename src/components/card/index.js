import {
  Box,
  Card as MuiCard,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import GradientBox from "../gradientBox";
import { useState } from "react";
import GradientForm from "../form";
import { useFormik } from "formik";
const Card = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      primaryColor: "#80D0C7",
      secondaryColor: "#0093E9",
      angle: 0,
      percentage: 40,
    },
  });
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
            <GradientBox formik={formik} />
          </Box>
        </CardContent>
        <CardContent>
          <GradientForm formik={formik} />
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
}));
