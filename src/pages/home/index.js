import { Box, makeStyles } from "@material-ui/core";
import Main from "../../components/main";
import SplashScreen from "../../components/splashScreen";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeRoot}>
      <SplashScreen>
        <Main />
      </SplashScreen>
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
}));
