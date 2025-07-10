import LinkIcon from '../../../assets/Link (2).svg';
import ArrowIcon from '../../../assets/Arrow sync.svg';
import JobRequestColumn from './JobRequestColumn';
import SubmittedColumn from './SubmittedColumn';
import StatusColumn from './StatusColumn';
import SubmitterColumn from './SubmitterColumn';

export default function GroupedColumns() {
  return (
    <div className="w-[631px] h-[872px] flex flex-col dark:bg-gray-900  border-[#EEEEEE] dark:border-[#333]">
      {/* Filter bar row */}
      <div className="w-full h-[33px] flex items-center justify-start gap-2 px-2 bg-[#E2E2E2] dark:bg-gray-800 border-b border-[#EEEEEE] dark:border-[#333]">
        <div className="flex items-center gap-[4px] px-[6px] py-[3px] h-[24px] rounded bg-[#EEEEEE] dark:bg-gray-700">
          <img src={LinkIcon} alt="link" className="w-[16px] h-[16px]" />
          <span 
          onClick={() => console.log("Financial overview clicked")}
          className="text-[12px] leading-[16px] text-[#545454] dark:text-white">
            Q3 Financial Overview
          </span>
        </div>
        <img src={ArrowIcon} alt="sync" className="w-[16px] h-[16px]" />
      </div>

      {/* Columns row: JobRequest + Submitted + Status + Submitter */}
      <div className="flex flex-row overflow-x-auto overflow-y-hidden">
        <JobRequestColumn />
        <SubmittedColumn />
        <StatusColumn />
        <SubmitterColumn />
      </div>
    </div>
  );
}


