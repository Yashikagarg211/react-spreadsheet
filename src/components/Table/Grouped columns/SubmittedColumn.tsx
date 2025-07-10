import { Calendar, ChevronDown } from "lucide-react";

export default function SubmittedColumn() {
  const submissionDates = [
    '15-11-2024',
    '30-10-2024',
    '05-12-2024',
    '10-01-2025',
    '25-01-2025',
  ];

  return (
    <div className="w-[124px] h-[872px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* Title cell */}
      <div className="w-full h-[32px] px-2 pr-1 flex items-center justify-between bg-[#EEEEEE] dark:bg-[#2D2D2D] border-b border-[#EEEEEE] dark:border-[#333]">
        <div className="flex items-center gap-[4px]">
          <Calendar className="w-[16px] h-[16px] text-[#AFAFAF]" strokeWidth={1.5} />
          <span 
          onClick={() => console.log("Submitted tab clicked")}
          className="text-[12px] font-semibold text-[#1A1A1A] dark:text-[#EAEAEA]">
            Submitted
          </span>
        </div>
        <div className="w-[20px] h-[20px] p-[4px] rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
          <ChevronDown className="w-[12px] h-[12px] text-[#AFAFAF]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Filled cells */}
      {submissionDates.map((date, index) => (
        <div
          key={index}
          onClick={() => console.log(`Submitted on clicked: ${date}`)}
          className="w-full h-[32px] px-2 flex items-center justify-end pr-2 bg-white dark:bg-[#1E1E1E] text-[12px] text-[#1A1A1A] dark:text-[#EAEAEA] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] transition"
        >
          {date}
        </div>
      ))}

      {/* Empty filler rows */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          onClick={() => console.log("Empty cell clicked")}
          className="w-full h-[32px] border-b border-[#EEEEEE] dark:border-[#333] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        />
      ))}
    
      {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]" />
    </div>
  );
}

