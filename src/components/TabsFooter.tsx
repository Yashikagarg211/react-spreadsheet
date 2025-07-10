import { useState } from 'react';
import { Plus } from 'lucide-react';
import clsx from 'clsx';
import { tabItems } from '../data/footerTabsData';

export default function TabsFooter() {
  const [activeTab, setActiveTab] = useState('All Orders');

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-white dark:bg-gray-900 border-t border-[#EEEEEE] dark:border-gray-700">
      <div className="w-full max-w-[1440px] h-[48px] mx-auto px-[32px] flex items-center gap-[24px]">
        <div className="flex h-[44px] w-[437px] items-center gap-[8px]">
          {tabItems.map((tab) => {
            const isActive = tab.label === activeTab;

            return (
              <div
                key={tab.label}
                className={clsx(
                  'h-[44px] border-t-[2px] px-[16px] pt-[10px] pb-[10px] cursor-pointer flex items-center justify-center transition-colors',
                  isActive
                    ? 'border-t-green-600 bg-green-50 dark:bg-green-900/20 font-semibold text-[#000] dark:text-white'
                    : 'border-t-transparent font-medium text-[#666] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
                style={{ width: `${tab.width}px` }}
                onClick={() => {
                  setActiveTab(tab.label);
                  console.log(`${tab.label} clicked`);
                }}
              >
                <span className="text-[16px] leading-[24px] whitespace-nowrap">{tab.label}</span>
              </div>
            );
          })}

          {/* "+" Tab */}
          <div
            className="w-[36px] h-[44px] px-[4px] py-[8px] flex items-center justify-center gap-[4px] cursor-pointer"
            onClick={() => console.log('Plus tab clicked')}
          >
            <div className="w-[28px] h-[28px] p-[4px] rounded-[4px] hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
              <Plus className="w-[20px] h-[20px] text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

