import {
  Box,
  Card as MuiCard,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import GradientBox from "../gradientBox";
import { useReducer } from "react";
import GradientForm from "../form";
import { initialState, reducer } from "./reducer";
import GradientRule from "../gradientRule";
const Card = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MuiCard elevation={20} className={classes.root}>
      <Box className={classes.cardContentWrapper}>
        <CardContent>
          <Box className={classes.inputsWrapper}>
            <GradientBox state={state} />
          </Box>
        </CardContent>
        <CardContent>
          <GradientForm dispatch={dispatch} state={state} />
        </CardContent>
        <CardContent>
          <GradientRule state={state} />
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
    width: 450,
    height: "70vh",
  },
  inputsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
}));
