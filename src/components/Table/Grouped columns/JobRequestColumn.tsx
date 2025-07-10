import { Briefcase} from 'lucide-react';
import dropdownArrow from '../../../assets/Chevron.svg'
import jobRequestData from '../../../data/jobRequestData';

export default function JobRequestColumn() {
  return (
    <div className="w-[256px] h-[872px] flex flex-col border-0 border-[#F6F6F6] dark:border-[#333]">
      {/* Table Title Row */}
      <div className="w-full h-[32px] px-2 pr-1 flex items-center justify-between gap-[4px] bg-[#EEEEEE] dark:bg-[#2D2D2D] border-b border-[#EEEEEE] dark:border-[#333]">
        <div className="flex items-center gap-[4px] w-[220px] bg-[#EEEEEE] dark:bg-[#2D2D2D]">
          <Briefcase className="w-[16px] h-[16px] text-[#AFAFAF]" strokeWidth={1.5} />
          <span 
          onClick={() => console.log("Job Request tab clicked")}
          className="text-[12px] font-medium leading-[16px] text-[#1A1A1A] dark:text-[#EAEAEA] whitespace-nowrap">
            Job Request
          </span>
        </div>
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
         <img src={dropdownArrow} alt='dropdown-arrow' className='h-[12px] w-[12px]' />
        </div>
      </div>

      {/* Content Rows */}
      {jobRequestData.map((text, index) => (
        <div
        key={index}
        title={text}
        onClick={() => console.log(`Job Request clicked: ${text}`)}
        className="w-full h-[32px] px-2 flex items-center border-b bg-white dark:bg-[#1E1E1E] border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] transition-colors">
        <span className="text-[14px] leading-[20px] text-[#1A1A1A] dark:text-[#EAEAEA] truncate w-full block">
         {text}
        </span>
       </div>
      ))}

      {/* Remaining filler rows */}
      {Array.from({ length: 25 - jobRequestData.length }).map((_, i) => (
        <div
          key={`empty-${i}`}
          onClick={() => console.log("Empty cell clicked")}
          className="w-full h-[32px] px-2 bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        />
      ))}
    
      {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors" />
    </div>
  );
}
