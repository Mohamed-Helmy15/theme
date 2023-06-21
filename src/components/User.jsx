import React, { useContext } from "react";
import { themContext } from "./../App";

const User = () => {
  const theme = useContext(themContext);
  return <div style={{ color: theme.palette.main.txtColor }}>user</div>;
};

export default User;
