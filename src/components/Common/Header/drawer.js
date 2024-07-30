import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Btn from '../../Common/Button'
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import Link from 'next/link';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (darkMode) {
      setLight();
    } else {
      setDark();
    }
    setDarkMode((prevMode) => !prevMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
        <Link href="/">
            <p className="">Home</p>
          </Link>
          <Link href="/compare">
            <p >Compare</p>
          </Link>
          <Link href="/watchlist">
            <p>Watchlist</p>
          </Link>
          <Link href="/dashboard">
            <Btn 
              text="Dashboard"
              outlined={true}
              />
          </Link>
          <Switch checked={darkMode} onClick={changeMode} />
        </div>
      </Drawer>
    </div>
  );
}
