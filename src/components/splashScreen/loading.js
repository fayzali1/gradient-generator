import { Box, makeStyles, Typography } from "@material-ui/core";
import Typing from "react-typing-animation";

const LoadingMessage = ({ setLoading }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typing speed={200} onFinishedTyping={() => setLoading(false)}>
        <Typography variant="h1" className={classes.heading}>
          gradient
        </Typography>
        {<Typing.Delay ms={1000} />}
        <Typography variant="h4">Create cool gradients here!</Typography>
      </Typing>
    </Box>
  );
};

export default LoadingMessage;

const useStyles = makeStyles(() => ({
  heading: {
    background: "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    padding: 10,
  },
}));
