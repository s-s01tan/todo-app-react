import { Typography } from "@mui/material";
import { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <Typography variant="h3" className="main-header custom-font">
        Don't work hard, work smart
      </Typography>
      <Typography variant="h6" className="second-header custom-font">
        Plan your tasks and get better results...
      </Typography>
    </Fragment>
  );
};

export default Header;
