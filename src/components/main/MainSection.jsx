import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import AllCountry from "./AllCountry";

const MainSection = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="dark:bg-[#202D36] min-h-screen">
      <TopSection setSearch={setSearch} region={region} setRegion={setRegion} />
      <div className="mx-12 mt-14">
        <AllCountry search={search} region={region} />
      </div>
    </div>
  );
};

export default MainSection;
