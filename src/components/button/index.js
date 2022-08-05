import { makeStyles } from "@material-ui/core";

const Button = ({ children }) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export default Button;

const useStyles = makeStyles(() => ({}));
