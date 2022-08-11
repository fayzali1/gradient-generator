import { Box, makeStyles, Typography } from "@material-ui/core";
import Card from "../card";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Box className={classes.headingWrapper}>
        <Typography variant="h1" className={classes.heading}>
          gradient
        </Typography>
      </Box>
      <Card />
    </>
  );
};

export default Main;

const useStyles = makeStyles((theme) => ({
  heading: {
    background: "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    padding: 10,
  },
  headingWrapper: {
    paddingBottom: 20,
  },
}));
