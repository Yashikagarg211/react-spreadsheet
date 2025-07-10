import GlobeIcon from '../../assets/Globe.svg';
import ChevronIcon from '../../assets/Chevron.svg';
import { urls } from '../../data/urlData';

export default function URLColumn() {
  return (
    <div className="w-[124px] h-[872px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* Top filler cell aligned beside grouped filter bar */}
      <div onClick={() => console.log("Empty cell clicked")} className="w-full h-[32px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]" />

      {/* Table Title Cell */}
      <div onClick={() => console.log("URL clicked")} className="w-full h-[32px] px-[8px] pr-[4px] flex items-center justify-between gap-[4px] bg-[#EEEEEE] dark:bg-[#2D2D2D] border-b border-[#EEEEEE] dark:border-[#333]">
        {/* Icon + Title */}
        <div className="flex items-center gap-[4px] w-[88px] h-[16px]">
          
          <img
            src={GlobeIcon}
            alt="globe"
            className="w-[16px] h-[16px] object-contain"
          />
          <span className="text-[12px] font-medium leading-[16px] text-[#757575] dark:text-[#EAEAEA] whitespace-nowrap">
            URL
          </span>
        </div>

        {/* Dropdown Chevron */}
        <div
          onClick={() => console.log('URL column dropdown clicked')}
          className="w-[20px] h-[20px] p-[4px] rounded-[4px] hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
        >
          <img
            src={ChevronIcon}
            alt="chevron"
            className="w-[12px] h-[12px] object-contain"
          />
        </div>
      </div>

      {/* 5 Content Rows */}
      {urls.map((url, i) => (
        <div
        key={i}
        title={url}
        className="w-full h-[32px] px-[8px] flex items-center border-b bg-white dark:bg-[#1E1E1E] border-[#EEEEEE] dark:border-[#333]  hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        onClick={() => console.log(`Clicked URL: ${url}`)}>
        <span className="w-[108px] text-[12px] font-medium leading-[16px] text-[#121212] dark:text-[#EAEAEA] underline whitespace-nowrap overflow-hidden text-ellipsis block ">
         {url}
        </span>
        </div>
      ))}

      {/* Remaining filler rows to complete 25 total */}
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
