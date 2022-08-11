import { Box, makeStyles, Typography } from "@material-ui/core";
import Typing from "react-typing-animation";

const LoadingMessage = ({ setLoading, ...props }) => {
  const classes = useStyles();
  const handleFinishTyping = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <Box {...props}>
      <Typing speed={200} onFinishedTyping={handleFinishTyping}>
        <Typography variant="h1" className={classes.heading}>
          gradient
        </Typography>
        {<Typing.Delay ms={1000} />}
        {<Typing.Speed ms={100} />}
        <Typography variant="h4">Create your own gradient!</Typography>
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
