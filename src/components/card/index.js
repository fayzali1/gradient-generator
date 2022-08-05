import {
  Box,
  Card as MuiCard,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import GradientBox from "../gradientBox";
import Input from "../input";
const Card = () => {
  const classes = useStyles();
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
