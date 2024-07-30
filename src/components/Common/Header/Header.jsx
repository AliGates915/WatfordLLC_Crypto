"use client"
import React, { useEffect, useState } from "react";
import Btn from '../Button'
import Image from 'next/image';
import Logo from '../../../assets/watford logo.png'
import TemporaryDrawer from "./drawer";
import "./Header.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import Link from 'next/link';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const changeMode = () => {
    if (darkMode) {
      setLight();
    } else {
      setDark();
    }
    setDarkMode(prevMode => !prevMode);
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
      <div className="header">
       <Link href="/">
            <Image className="image" src={Logo} alt="Logo"  />
        </Link>
        <div className="links">
          <Switch checked={darkMode} onClick={changeMode} />
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
        </div>
        <div className="drawer-component">
          <TemporaryDrawer />
        </div>
      </div>
  );
}
