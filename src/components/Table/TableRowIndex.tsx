import hashIcon from '../../assets/Number Symbol.svg'

export default function TableColumn() {
  return (
    <div className="w-[32px] h-[872px] flex flex-col bg-white dark:bg-gray-900 overflow-y-auto custom-scrollbar border-r border-[#EEEEEE] dark:border-[#333]">
      {/* Top-left blank cell */}
      <div className="w-full h-[32px] bg-white dark:bg-[#1E1E1E]" />

      {/* Column title with # icon */}
      <div className="w-full h-[32px] flex items-center justify-center bg-[#EEEEEE] dark:bg-[#2D2D2D] border-b border-[#EEEEEE] dark:border-[#333]" onClick={() => console.log('Hash Clicked')}>
        <img src={hashIcon} alt="hash-icon" className='w-[13px] h-[13px]' />
      </div>

      {/* Numbered index cells */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          onClick={() => console.log(`Column clicked: ${i+1}`)}
          className="w-full h-[32px] flex items-center justify-center text-[14px] leading-[20px] text-[#1A1A1A] dark:text-[#EAEAEA] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        >
          {i + 1}
        </div>
      ))}
    
    {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors" />
    </div>
  );
}
