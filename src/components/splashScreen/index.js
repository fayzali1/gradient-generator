import { Box, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import LoadingMessage from "./loading";

const SplashScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Box>
      {loading ? <LoadingMessage setLoading={setLoading} /> : <>{children}</>}
    </Box>
  );
};

export default SplashScreen;
