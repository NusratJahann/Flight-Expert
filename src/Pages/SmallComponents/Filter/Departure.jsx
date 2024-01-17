import React from "react";
import { PiSunHorizonFill, PiSunHorizonLight, PiSun } from "react-icons/pi";

const Departure = () => {
  const departureDetails = [
    {
      icon: <PiSunHorizonLight size={25} />,
      time: "Morning",
      from: "6:00",
      to: "11:59 (5)",
    },
    {
      icon: <PiSun size={25} />,
      time: "After Noon",
      from: "12:00",
      to: "17:59 (3)",
    },
    {
      icon: <PiSunHorizonFill size={25} />,
      time: "Evening",
      from: "18:00",
      to: "23:59 (7)",
    },
  ];
  return (
    <div className="flex flex-col py-5 gap-5 border-b px-6">
      <h1 className="text-xl">Departure time in Dhaka</h1>
      <div className="grid lg:grid-cols-2 grid-cols-3 lg:gap-4 gap-2">
        {departureDetails.map((departure, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer border border-black flex flex-col justify-center items-center gap-2 rounded-lg"
          >
            <span className="cursor-pointer">{departure.icon}</span>
            <label className="flex flex-col justify-center items-center cursor-pointer">
              <span className="font-bold text-xs">{departure.time}</span>
              <span className="text-xs">
                {departure.from} - {departure.to}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departure;
