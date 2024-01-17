import React from "react";
import Button from "../SmallComponents/Button/Button";
import { FaAngleDown } from "react-icons/fa";

const Trip = ({ data }) => {
  const buttonClassNames =
    "bg-[#EB1933] text-white py-[10px] px-[15px] sm:py-5 sm:py-2 px-2 border border-[#EB1933] rounded-md hover:bg-white hover:text-[#EB1933] transition-all duration-300 text-sm font-bold";
  return (
    <div className="px-4 py-6 bg-white drop-shadow-md rounded-lg border ">
      <div className="grid grid-cols-6 place-items-start gap-7">
        <div className="">
          <img
            className="h-auto md:w-[4rem] w-[3rem]"
            src={data.airlineDetails.image}
            alt={data.airlineDetails.airlines_name.toLowerCase()}
          />
          <p className="text-[12px] text-[#7c8db0]">
            {data.airlineDetails.airlines_name}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Depart</p>
          <label>
            <p className="font-[600] text-[#27273f]">
              {data.departDetails.time}
            </p>
            <p className="text-sm text-[#27273f]">{data.departDetails.date}</p>
          </label>
          <p className="text-sm text-[#27273f]">
            {data.departDetails.location}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-[#7c8db0]">{data.duration.time}</p>
          <img
            src={data.duration.image}
            alt={data.duration.status.toLowerCase()}
          />
          <p className="text-xs text-[#27273f]">{data.duration.status}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Arrive</p>
          <label>
            <p className="font-[600] text-[#27273f]">
              {data.arriveDetails.time}
            </p>
            <p className="text-sm text-[#27273f]">{data.arriveDetails.date}</p>
          </label>
          <p className="text-sm text-[#27273f]">
            {data.arriveDetails.location}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Price</p>
          <p className="font-[600] text-[#27273f]">{data.price}</p>
        </div>
        <Button
          text={"Book Now"}
          buttonClassNames={buttonClassNames}
          type={"button"}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[12px] text-[#008000]">
          {data.airlineDetails.refund_status}
        </p>
        <button className="flex gap-3 items-center text-[#EB1933] hover:text-[#8b0000] font-bold">
          <span>Flight Details</span>
          <FaAngleDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Trip;
