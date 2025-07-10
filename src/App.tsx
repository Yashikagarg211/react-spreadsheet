import Header from './components/Header';
import TableToolbar from './components/TableToolbar';
import SpreadsheetTable from './components/Table/SpreadsheetTable';
import TabsFooter from './components/TabsFooter';

export default function App() {
  

  return (
    <div className="min-w-[1024px] max-w-full min-h-screen mx-auto bg-[#F6F6F6] dark:bg-[#111111] ">
      {/* Fixed Header and Toolbar */}
      <Header />
      <TableToolbar />

      {/* Main Scrollable Area: Adjusted for top (96px) and bottom (48px) */}
      <main className="pt-[96px] pb-[9px] ">
        <SpreadsheetTable />
      </main>

      {/* Fixed Footer */}
      <TabsFooter />
    </div>
  );
}


