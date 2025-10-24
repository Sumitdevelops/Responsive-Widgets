import React, { useState } from "react";
import TabContent from "./TabContent";
import tabData from "./TabData";

export default function ProfileWidget() {
const [activeTab, setActiveTab] = useState("about");

return (
<div className="bg-[#23272F] w-full h-[316px] rounded-2xl shadow-lg p-6 overflow-hidden">

<div className="flex bg-black rounded-3xl p-1 justify-between mb-4">
{Object.keys(tabData).map((tab) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`flex-1 px-6 py-2 rounded-full font-semibold transition-all text-sm ${
      activeTab === tab
        ? "bg-[#23272F] text-white border border-white/20 shadow-inner"
        : "text-white hover:bg-white/5"
    }`}
  >
    {tab.charAt(0).toUpperCase() + tab.slice(1)}
  </button>
))}
</div>


<div className="h-[200px] overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#363C43] scrollbar-thumb-rounded">
<TabContent activeTab={activeTab} tabContent={tabData} />
</div>
</div>
);
}