import React from "react";

export default function TabContent({ activeTab, tabContent }) {
  const content = tabContent[activeTab];

return (
<div className=" w-[611px] h-[175px] text-[#E3E3E3] leading-relaxed text-[15px] bg-transparent overflow-y-auto mx-auto mt-6">

  <p className="whitespace-pre-line font-normal">
    {content.content}
  </p>
</div>
);
}