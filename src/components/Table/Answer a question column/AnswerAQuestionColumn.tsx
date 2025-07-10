import ArrowSplitIcon from '../../../assets/Arrow Split.svg';
import MoreIcon from '../../../assets/More.svg';
import priorityData from '../../../data/priority';
import dueDateData from '../../../data/dueDate';

export default function AnswerAQuestionColumn() {
  return (
    <div className="w-[251px] h-[872px] flex flex-col border-l border-[#EEEEEE] dark:border-[#333]">
      {/* Title Row: Function Block */}
      <div className="w-full h-[32px] px-[16px] flex items-center justify-between border-b border-[#EEEEEE] dark:border-[#333] bg-[#DCCFFC] dark:bg-[#3F3366]">
        <button
          onClick={() => console.log("Answer a question clicked")}
          className="flex items-center gap-[4px] h-[24px] px-[4px] py-[2px] rounded hover:bg-[#CDBDF7] dark:hover:bg-[#5A4A84] transition"
        >
          <img src={ArrowSplitIcon} alt="arrow" className="w-[16px] h-[16px]" />
          <span className="text-[14px] font-medium leading-[20px] text-[#463E59] dark:text-[#E1D6F9]">
            Answer a question
          </span>
        </button>
        <button className="w-[20px] h-[20px] flex items-center justify-center rounded hover:bg-[#CDBDF7] dark:hover:bg-[#5A4A84]">
          <img src={MoreIcon} alt="more" className="w-[16px] h-[16px]" />
        </button>
      </div>

      {/* 2-column container */}
      <div className="flex flex-row border-0 border-[#EEEEEE] dark:border-[#333] h-[839px]">
        {/* Priority Column */}
        <div className="w-[125px] flex flex-col border-r border-[#EEEEEE] dark:border-[#333]">
          <div onClick={() => console.log("Priority clicked")} className="h-[32px] px-[8px] pr-[4px] flex items-center bg-[#EAE3FC] dark:bg-[#4B3F69] border-b border-[#EEEEEE] dark:border-[#333]">
            <span className="text-[12px] font-semibold leading-[16px] text-[#655C80] dark:text-[#D9D1EC]">
              Priority
            </span>
          </div>
          {priorityData.map((priority, idx) => {
            const colorMap = {
              Low: '#1A8CFF',
              Medium: '#C29210',
              High: '#EF4D44',
            };
            return (
              <div
                key={idx}
                onClick={() => console.log(priority)}
                className="h-[32px] flex items-center justify-center border-b border-[#EEEEEE] dark:border-[#333] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
              >
                <span
                  className="text-[12px] font-semibold leading-[16px] text-center"
                  style={{ color: colorMap[priority as 'Low' | 'Medium' | 'High'] }}
                >
                  {priority}
                </span>
              </div>
            );
          })}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              onClick={() => console.log("Empty cell clicked")}
              className="h-[32px] border-b border-[#EEEEEE] dark:border-[#333] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
            />
          ))}
        
          {/* Final half-height cell (16px) */}
          <div className="w-full h-[7px] px-[8px] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors" />
          </div>

        {/* Due Date Column */}
        <div className="w-[126px] flex flex-col">
          <div onClick={() => console.log("DueDate clicked")} className="h-[32px] px-[8px] pr-[4px] flex items-center bg-[#EAE3FC] dark:bg-[#5A4A84] border-b border-[#EEEEEE] dark:border-[#333]">
            <span className="text-[12px] font-semibold leading-[16px] text-[#655C80] dark:text-[#D9D1EC]">
              Due Date
            </span>
          </div>
          {dueDateData.map((date, idx) => (
            <div
              key={idx}
              onClick={() => console.log(date)}
              className="h-[32px] px-[8px] flex items-center justify-end border-b border-[#EEEEEE] dark:border-[#333] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
            >
              <span className="text-[12px] leading-[16px] text-[#121212] dark:text-[#EAEAEA] text-right">
                {date}
              </span>
            </div>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              onClick={() => console.log("Empty cell clicked")}
              className="h-[32px] px-[8px] border-b border-[#EEEEEE] dark:border-[#333] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
            />
          ))}
        
        {/* Final half-height cell (16px) */}
      <div className="w-full h-[7px] px-[8px] bg-white dark:bg-[#1E1E1E] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors" />
    </div>

      </div>
    </div>
  );
}
