import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import { createContext } from "react";

export const themContext = createContext();
function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "light"
  );
  const darkTheme = createTheme({
    palette: {
      mode: theme,
      main: {
        appBgColor: theme === "light" ? "#ccc" : "grey",
        navBgColor: theme === "light" ? "#333" : "#aaa",
        txtColor: theme === "light" ? "#39ff00" : "#ffffff",
      },
    },
  });
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <themContext.Provider value={darkTheme}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div
          className="App"
          style={{
            height: "100vh",
            transition: "0.3s",
          }}
        >
          <nav
            className="navbar"
            style={{ backgroundColor: darkTheme.palette.main.navBgColor }}
          >
            <div className="nav-wrapper">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link
                    className="navbar-link"
                    to={"home"}
                    style={{ color: darkTheme.palette.main.txtColor }}
                  >
                    home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link
                    className="navbar-link"
                    to={"user"}
                    style={{ color: darkTheme.palette.main.txtColor }}
                  >
                    user
                  </Link>
                </li>
              </ul>
              <IconButton
                sx={{ ml: 1 }}
                style={{
                  backgroundColor: theme === "light" ? "white" : " black",
                }}
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                {darkTheme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </div>
          </nav>

          <Outlet />
        </div>
      </ThemeProvider>
    </themContext.Provider>
  );
}

export default App;
