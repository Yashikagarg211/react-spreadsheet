import ArrowSplitIcon from '../../assets/Arrow Split.svg';
import MoreIcon from '../../assets/More.svg';
import assignedData from '../../data/assignedData';
import EmojiIcon from '../../assets/Emoji.svg';

export default function AssignedColumn() {
  return (
    <div className="w-[124px] h-[872px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* First Table Title Cell - ABC & More */}
      <div className="w-full h-[32px] px-[16px] flex items-center justify-between border-b border-[#EEEEEE] dark:border-[#333] bg-[#D2E0D4] dark:bg-[#2F3B30]">
        {/* Function Block - ABC */}
        <button
          onClick={() => console.log("ABC clicked")}
          className="flex items-center gap-[4px] h-[24px] px-[4px] py-[2px] rounded hover:bg-[#C1D6C4] dark:hover:bg-[#3A493A] transition"
        >
          <img src={ArrowSplitIcon} alt="arrow" className="w-[16px] h-[16px]" />
          <span className="text-[#505450] dark:text-[#D9EAD3] text-[14px] font-medium leading-[20px]">
            ABC
          </span>
        </button>

        {/* More Icon */}
        <button
          onClick={() => console.log("More clicked")}
          className="w-[20px] h-[20px] flex items-center justify-center rounded hover:bg-[#C1D6C4] dark:hover:bg-[#3A493A] transition"
        >
          <img src={MoreIcon} alt="more" className="w-[16px] h-[16px]" />
        </button>
      </div>

      {/* Second Table Title Cell - Assigned */}
      <div
        onClick={() => console.log("Assigned clicked")}
        className="w-full h-[32px] px-[8px] pr-[4px] flex items-center justify-between gap-[4px] bg-[#E8F0E9] dark:bg-[#3C4A3F] border-b border-[#EEEEEE] dark:border-[#333] cursor-pointer hover:bg-[#DAE8DC] dark:hover:bg-[#445344] transition"
      >
        <div className="flex items-center gap-[4px] w-[112px] h-[16px]">
          <img
            src={EmojiIcon}
            alt="emoji"
            className="w-[16px] h-[16px] object-contain"
          />
          <span className="text-[12px] font-semibold leading-[16px] text-[#666C66] dark:text-[#D9EAD3]">
            Assigned
          </span>
        </div>
      </div>

      {/* Content Rows */}
      {assignedData.map((name, idx) => (
        <div
          key={idx}
          onClick={() => console.log(name)}
          className="w-full h-[32px] px-2 flex items-center bg-white dark:bg-[#1E1E1E] text-[#121212] dark:text-[#EAEAEA] text-[12px] font-medium leading-[16px] truncate border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        >
          {name}
        </div>
      ))}

      {/* Filler Rows */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          onClick={() => console.log("Empty cell clicked")}
          className="w-full h-[32px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        />
      ))}

      {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]" />
    </div>
  );
}
