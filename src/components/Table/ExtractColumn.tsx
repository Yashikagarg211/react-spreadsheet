import ArrowSplitIcon from '../../assets/Arrow Split.svg';
import MoreIcon from '../../assets/More.svg';
import extractData from '../../data/extractData';

export default function ExtractColumn() {
  return (
    <div className="w-[124px] h-[872px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* First Header Row — Function Block */}
      <div className="w-full h-[32px] px-4 flex items-center justify-between bg-[#FAC2AF] dark:bg-[#3F2F2F] border-b border-[#EEEEEE] dark:border-[#333]">
        <button
          onClick={() => console.log('Extract clicked')}
          className="flex items-center gap-[4px] h-[24px] px-[4px] py-[2px] rounded hover:bg-[#F3BAA5] dark:hover:bg-[#4A3A3A] transition"
        >
          <img src={ArrowSplitIcon} alt="arrow" className="w-[16px] h-[16px]" />
          <span className="text-[#4D2D1F] dark:text-[#FFE9E0] text-[14px] font-medium leading-[20px]">
            Extract
          </span>
        </button>

        <button
          onClick={() => console.log('More clicked')}
          className="w-[20px] h-[20px] flex items-center justify-center rounded hover:bg-[#F3BAA5] dark:hover:bg-[#4A3A3A] transition"
        >
          <img src={MoreIcon} alt="more" className="w-[16px] h-[16px]" />
        </button>
      </div>

      {/* Second Header Row — Column Title */}
      <div onClick={() => console.log("Estimated Value clicked")} className="w-full h-[32px] px-[8px] flex items-center bg-[#FFE9E0] dark:bg-[#4D3B3B] border-b border-[#EEEEEE] dark:border-[#333]">
        <span className="text-[12px] font-semibold leading-[16px] text-[#703C27] dark:text-[#FFE9E0]">
          Est. value
        </span>
      </div>

      {/* 5 Data Rows */}
      {extractData.map((value, idx) => (
        <div
          key={idx}
          onClick={() => console.log(value)}
          className="w-full h-[32px] px-[8px] flex justify-end items-center gap-[4px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        >
          <span className="text-[12px] leading-[16px] font-medium text-[#121212] dark:text-[#EAEAEA] text-right">
            {value}
          </span>
          <span className="text-[12px] leading-[16px] font-medium text-[#121212] dark:text-[#EAEAEA] text-right">
            ₹
          </span>
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
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors" />
    </div>
  );
}
