import TableColumn from './TableRowIndex';
import GroupedColumns from './Grouped columns/GroupedColumns';
import URLColumn from './urlColumn';
import AssignedColumn from './AssignedColumn';
import AnswerAQuestionColumn from './Answer a question column/AnswerAQuestionColumn';
import ExtractColumn from './ExtractColumn';
import AddColumn from './AddColumn';

export default function SpreadsheetTable() {
  return (
    <div className="w-[1440px] h-[872px] flex bg-[#F6F6F6] dark:bg-gray-900 border dark:border-[#333] divide-x divide-[#EEEEEE] dark:divide-[#333] font-medium">
      <TableColumn />
      <GroupedColumns />
      <URLColumn />
      <AssignedColumn />
      <AnswerAQuestionColumn />
      <ExtractColumn />
      <AddColumn />
    </div>
  );
}

