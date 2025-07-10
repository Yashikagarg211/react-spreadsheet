import AddIcon from '../../assets/Add.svg';

export default function AddColumn() {
  return (
    <div className="w-[124px] h-[872px] flex flex-col border-l-[3px] border-r-[3px] border-dashed border-[#AFAFAF] dark:border-[#666] outline-none box-border">
      {/* Top Filler Cell (matches TableColumn's # row) */}
      <div className="w-full h-[32px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]" />

      {/* Add Button Row */}
      <div className="h-[32px] w-full px-[8px] bg-[#EEEEEE] dark:bg-[#2D2D2D] flex items-center justify-center border-b border-[#EEEEEE] dark:border-[#333]">
        <button
          onClick={() => console.log('Add clicked')}
          className="w-[20px] h-[20px] flex items-center justify-center rounded hover:bg-[#E4E4E4] dark:hover:bg-[#3A3A3A] transition"
        >
          <img
            src={AddIcon}
            alt="Add"
            className="w-[14.5px] h-[14.5px] object-contain pointer-events-none dark:invert"
          />
        </button>
      </div>

      {/* 23 filler rows (23 × 32px = 736px) */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          onClick={() => console.log('Empty cell clicked')}
          className="w-full h-[32px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333] hover:bg-[#F9F9F9] dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
        />
      ))}

      {/* Final half-height cell (16px) */}
      <div className="w-full h-[8px] px-[8px] bg-white dark:bg-[#1E1E1E] border-b border-[#EEEEEE] dark:border-[#333]" />
    </div>
  );
}





