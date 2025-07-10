import { Search, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Bell from "../assets/Alert.svg";
import avatar from "../assets/avatar.png";
import panelIcon from "../assets/Panel.svg";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-[1440px] mx-auto h-[48px] flex justify-between items-center px-6 py-2">
        {/* Left: Panel + Breadcrumbs + More */}
        <div className="flex items-center gap-4">
          <PanelIcon />

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span 
            onClick={() => console.log("Workspace clicked")}
            className="font-medium text-[14px] leading-5">Workspace</span>
            <Chevron />
            <span 
            onClick={() => console.log("Folder2 clicked")}
            className="font-medium text-[14px] leading-5">Folder 2</span>
            <Chevron />
            <span 
            onClick={() => console.log("Spreadsheet3 clicked")}
            className="font-medium text-[14px] leading-5">Spreadsheet 3</span>
          </div>

          {/* More icon */}
          <button
            className="w-6 h-6 flex items-center justify-center rounded dark:bg-gray-800"
            onClick={() => console.log("Clicked More")}
          >
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Right: Search + Notification + Profile */}
        <div className="flex items-center gap-1.5">
          {/* 🔍 Search */}
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 h-10 rounded-md w-[165px]">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search within sheet"
              onChange={(e) => console.log("Search:", e.target.value)}
              className="text-xs bg-transparent focus:outline-none text-gray-700 dark:text-gray-200 placeholder:text-gray-500 w-full"
            />
          </div>

          {/* 🔔 Notification */}
          <button
            className="relative w-10 h-10 flex items-center justify-center"
            onClick={() => console.log("Clicked Notification")}
          >
            <img
              src={Bell}
              alt="Notifications"
              className="w-[20px] h-[20px] object-contain dark:invert"
            />
            <span className="absolute top-[2px] right-[2px] w-[16px] h-[16px] rounded-full bg-[#4B6A4F] text-white text-[10px] leading-[16px] font-medium flex items-center justify-center">
              2
            </span>
          </button>

          {/* 👤 Profile */}
          <div 
          onClick={() => console.log("Clicked Profile")}
          className="w-[112px] h-[40px] flex items-center gap-[8px] pt-[6px] pr-[12px] pb-[6px] pl-[8px]">
          <img src={avatar} className="w-[28px] h-[28px] rounded-full" />
            <div className="flex flex-col overflow-hidden">
            <span className="text-xs font-medium truncate dark:text-white">John Doe</span>
            <span className="text-[10px] text-gray-500 truncate">john.doe@companyname.com</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Chevron separator
const Chevron = () => (
  <svg width="12" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L1 9" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Panel Icon (Theme toggle)
const PanelIcon = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
    localStorage.setItem("theme", !dark ? "dark" : "light");
    console.log("Theme toggled:", !dark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-6 h-6 flex items-center justify-center"
      title="Toggle Theme"
    >
      <img
        src={panelIcon}
        alt="Toggle Theme"
        className="w-[20px] h-[20px] object-contain dark:invert"
      />
    </button>
  );
};

