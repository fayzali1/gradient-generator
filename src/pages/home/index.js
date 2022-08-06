import { Box, makeStyles, Typography } from "@material-ui/core";
import Card from "../../components/card";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeRoot}>
      <Box className={classes.headingWrapper}>
        <Typography variant="h1" className={classes.heading}>
          gradient
        </Typography>
      </Box>
      <Card />
    </Box>
  );
};

export default Home;
const useStyles = makeStyles((theme) => ({
  homeRoot: {
    backgroundColor: "#FAACA8",
    backgroundImage: " linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",

    // backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "100vh",
    display: "grid",
    placeContent: "center",
    textAlign: "center",
  },
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
