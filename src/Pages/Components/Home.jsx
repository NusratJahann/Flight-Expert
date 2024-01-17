import React from "react";
import ChooseTrip from "./ChooseTrip";
import Filter from "./Filter";
import OneWayTrip from "./OneWayTrip";

const Home = () => {
  return (
    <div className="lg:mx-[5rem] lg:my-2 lg:flex lg:flex-col lg:gap-10">
      <ChooseTrip />
      <div className="lg:flex lg:gap-10">
        <Filter />
        <OneWayTrip />
      </div>
    </div>
  );
};

export default Home;
