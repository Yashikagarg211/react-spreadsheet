import Right from '../assets/Chevron Double.svg';
import Eye from '../assets/Eye (2).svg';
import Filter from '../assets/Filter (2).svg';
import Sort from '../assets/Sort.svg';
import Grid from '../assets/cellview.svg';
import ImportIcon from '../assets/Import.svg';
import ExportIcon from '../assets/Export.svg';
import ShareIcon from '../assets/Share.svg';
import Split from '../assets/Arrow Split.svg';
import type { JSX } from "react";

export default function TableToolbar() {
  return (
    <div className="fixed top-[48px] left-0 z-40 w-full bg-white dark:bg-[#1A1A1A] border-b border-[#EEEEEE] dark:border-[#333]">
      <div className="w-full max-w-[1440px] h-[48px] mx-auto px-2 py-[6px] flex items-center gap-2">
        
        {/* Toolbar Block */}
        <div 
        onClick={() => console.log("Clicked Toolbar")}
        className="flex items-center gap-[4px] w-[91px] h-[36px] px-[8px] py-[8px] rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
          <span className="text-sm leading-[20px] text-[#444] dark:text-white font-medium">Toolbar</span>
          <img src={Right} alt="chevron" className="w-4 h-4 object-contain dark:invert" />
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-[#DADADA] dark:bg-[#666]" />

        {/* Middle Buttons (871px) */}
        <div className="flex items-center gap-[6px] w-[860px] h-[36px]">
          <ToolbarButton icon={Eye} label="Hide fields" />
          <ToolbarButton icon={Sort} label="Sort" />
          <ToolbarButton icon={Filter} label="Filter" />
          <ToolbarButton icon={Grid} label="Cell view" />
        </div>

        {/* Right Section: Import / Export / Share / New Action */}
        <div className="flex items-center gap-[8px] w-[437px] h-[36px] ml-auto">
          <ToolbarButton icon={ImportIcon} label="Import" bordered />
          <ToolbarButton icon={ExportIcon} label="Export" bordered exact />
          <ToolbarButton icon={ShareIcon} label="Share" bordered exact />

          {/* New Action */}
          <button
            onClick={() => console.log("New Action clicked")}
            className="flex items-center justify-center gap-[4px] w-[150px] h-[36px] px-[8px] pr-[12px] py-[8px] border border-[#4B6A4F] rounded-[6px] bg-[#4B6A4F] text-white text-sm font-medium hover:bg-green-700 transition"
          >
            <img
              src={Split}
              alt="New Action"
              className="w-[20px] h-[20px] object-contain dark:invert"
            />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
}

type ToolbarButtonProps = {
  icon: string;
  label: string;
  bordered?: boolean;
  exact?: boolean;
};

function ToolbarButton({ icon, label, bordered, exact = false }: ToolbarButtonProps): JSX.Element {
  // Exact size: 90x36px, padding left 8px, right 12px
  const exactStyle = exact
    ? "w-[90px] h-[36px] pl-[8px] pr-[12px]"
    : "h-[36px] px-[12px]";

  return (
    <button
      onClick={() => console.log(`${label} clicked`)}
      className={`flex items-center gap-[4px] ${exactStyle} py-[8px] rounded-[6px] text-sm font-medium ${
        bordered
          ? 'border border-[#DADADA] dark:border-[#444] text-[#222] dark:text-white'
          : 'text-[#222] dark:text-white hover:bg-[#E4E4E4] dark:hover:bg-[#3A3A3A]'
      }`}
    >
      <img src={icon} alt={label} className="w-[20px] h-[20px] object-contain dark:invert" />
      <span>{label}</span>
    </button>
  );
}

