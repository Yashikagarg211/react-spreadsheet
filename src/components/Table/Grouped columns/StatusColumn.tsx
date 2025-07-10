import { ChevronDown } from 'lucide-react';
import statusData from '../../../data/statusData';
import statusIcon from '../../../assets/StatusIcon.svg'

export default function StatusColumn() {
  return (
    <div className="w-[124px] h-[872px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* Title Row */}
      <div className="w-full h-[32px] px-2 pr-1 flex items-center justify-between gap-[4px] bg-[#EEEEEE] dark:bg-[#2D2D2D] border-b border-[#EEEEEE] dark:border-[#333]">
        <div className="flex items-center gap-[4px] w-[88px]">
          <img src={statusIcon} alt="status icon" className="w-[16px] h-[16px]" />
          <span 
          onClick={() => console.log("Status tab clicked")}
          className="text-[12px] font-semibold text-[#1A1A1A] dark:text-[#EAEAEA]">Status</span>
        </div>
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
          <ChevronDown className="w-[12px] h-[12px] text-[#AFAFAF]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Status Rows */}
      {statusData.map((status, idx) => (
        <div
          key={idx}
          onClick={() => console.log(`Status clicked: ${status}`)}
          className="w-full h-[32px] flex items-center justify-center bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]"
        >
          <div
            className={`min-w-fit max-w-[100px] px-2 py-1 rounded-full text-[12px] font-medium leading-[16px] whitespace-nowrap text-center transition-colors duration-200 cursor-default ${status.bgColor} ${status.textColor} ${status.hoverBgColor}` }
            style={{
              backgroundColor: status.bgColor,
              color: status.textColor,
            }}
          >
            {status.label}
          </div>
        </div>
      ))}

      {/* Fill remaining empty rows */}
      {Array.from({ length: 25 - statusData.length }).map((_, i) => (
        <div
          key={`empty-${i}`}
          onClick={() => console.log("Empty cell clicked")}
          className="w-full h-[32px] px-2 border-b border-[#EEEEEE] dark:border-[#333] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors]"
        />
      ))}
   
      {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors" />
    </div>
  );
}
