import ChevronIcon from '../../../assets/Chevron.svg';
import PersonIcon from '../../../assets/Person.svg';
import { submitters } from '../../../data/submitters';

export default function SubmitterColumn() {
  return (
    <div className="w-[127px] h-[871px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* Table Title Cell */}
      <div className="w-full h-[32px] px-[8px] pr-[4px] flex items-center justify-between gap-[4px] bg-[#EEEEEE] dark:bg-[#2D2D2D] border-b border-[#EEEEEE] dark:border-[#333]">
        {/* Icon + Title */}
        <div className="flex items-center gap-[4px] w-[88px] h-[16px]">
          <img
            src={PersonIcon}
            alt="person"
            className="w-[16px] h-[16px] object-contain"
          />
          <span 
          onClick={() => console.log("Submitter tab clicked")}
          className="text-[12px] font-semibold leading-[16px] text-[#757575] dark:text-[#EAEAEA] whitespace-nowrap">
            Submitter
          </span>
        </div>

        {/* Dropdown Chevron */}
        <div
          onClick={() => console.log('Dropdown clicked')}
          className="w-[20px] h-[20px] p-[4px] rounded-[4px] hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
        >
          <img
            src={ChevronIcon}
            alt="chevron"
            className="w-[12px] h-[12px] object-contain"
          />
        </div>
      </div>

      {/* Content Rows */}
      {submitters.map((name, i) => (
        <div
          key={i}
          onClick={() => console.log(`Submitter clicked: ${name}`)}
          className="w-full h-[32px] px-[8px] flex items-center text-[12px] leading-[16px] text-[#121212] dark:text-[#EAEAEA] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] whitespace-nowrap hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        >
          {name}
        </div>
      ))}

      {/* Filler Cells to reach 25 rows total */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          onClick={() => console.log("Empty cell clicked")}
          className="w-full h-[32px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]"
        />
      ))}
    
      {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]" />
    </div>
  );
}
