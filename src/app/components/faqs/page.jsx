"use client"

import React, { useState } from "react";
import data from "./faqs";

const FaqsSection = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="m-4 sm:w-2/3 mx-auto">
      <p className="m-6 text-center sm:text-xl font-bold text-[#14213d] uppercase">Get to know more about us</p>
      {data && data.length > 0
        ? data.map((dataItem) => {
            return (
              <div className="p-2 m-4 shadow" key={dataItem.id}>
                <div className="flex justify-normal cursor-pointer" onClick={() => handleSelection(dataItem.id)}>
                  <p className="text-base max-sm:text-sm text-[#14213d] font-bold mr-2">{dataItem.question}</p>
                  <span className="text-base font-bold text-[#14213d]">+</span>
                </div>
                  {selected === dataItem.id ? <p className="text-sm text-[#555] font-bold p-3 max-sm:p-1 leading-loose">{dataItem.answer}</p> : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default FaqsSection;
