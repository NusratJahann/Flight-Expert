import React from "react";
import SessionTimeOut from "../SmallComponents/Filter/SessionTimeOut";
import OneWayPrice from "../SmallComponents/Filter/OneWayPrice";
import Departure from "../SmallComponents/Filter/Departure";
import Others from "../SmallComponents/Filter/Others";
import Button from "../SmallComponents/Button/Button";

const Filter = () => {
  const buttonClassNames =
    "w-full py-2 text-[#EB1933] hover:text-white border border-[#EB1933] hover:bg-[#EB1933] rounded-[6px] mt-5 transition-all duration-300 text-[18px] font-[600]";
  return (
    <div className="lg:mt-0 mt-10 lg:h-full lg:w-[500px] md:min-w-[300px] bg-white rounded-2xl lg:shadow-lg border lg:pt-4 lg:pb-6 z-[0] flex-row lg:flex lg:flex-col">
      <SessionTimeOut />
      <OneWayPrice />
      <Departure />
      <Others />
      <div className="px-6">
        <Button
          buttonClassNames={buttonClassNames}
          type={"button"}
          text={"Clear Filters"}
        />
      </div>
    </div>
  );
};

export default Filter;
