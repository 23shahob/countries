import { MoonOutlined } from "@ant-design/icons";
import { DarkMode } from "@mui/icons-material";
import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const darkChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex h-16 items-center fixed top-0 w-full z-10 justify-between px-12 shadow-md dark:bg-[#2B3743]">
      <div>
        <p className="text text-xl font-semibold dark:text-white">
          Where in the world?
        </p>
      </div>
      <div className="flex items-center gap-2 ">
        <MoonOutlined className="mode dark:text-white" />
        <button onClick={darkChange} className="font-medium dark:text-white">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
