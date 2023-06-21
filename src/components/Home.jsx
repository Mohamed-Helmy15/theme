import React, { useContext } from "react";

import { themContext } from "./../App";
const Home = () => {
  const theme = useContext(themContext);

  return <div style={{ color: theme.palette.main.txtColor }}>home</div>;
};

export default Home;
