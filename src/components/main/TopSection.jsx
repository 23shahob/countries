import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const TopSection = ({ setSearch, setRegion, region }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    // setRegion(event.target.value);
  };
  return (
    <div className="mx-12 flex items-center justify-between pt-28">
      <div>
        <form className="flex h-14 w-[200px] items-center gap-2 rounded border border-gray-100 px-3 shadow-md hover:shadow-yellow-400 dark:border-none dark:bg-[#2B3743] sm:w-[300px] md:w-[450px]">
          <SearchOutlined className="h-7 w-7 text-neutral-600 dark:text-white" />
          <input
            type="search"
            id="default-search"
            onChange={(e) => setSearch(e.target.value)}
            className="h-full w-full bg-transparent text-lg text-neutral-600 outline-none placeholder:text-neutral-500 dark:bg-[#2B3743] dark:text-white dark:placeholder:text-white"
            placeholder="Search for a country..."
          />
        </form>
      </div>
      <div className="flex h-14 w-[180px] items-center rounded border border-gray-100 px-4 shadow-md hover:shadow-yellow-400 dark:border-none dark:bg-[#2B3743]">
        <select
          name="country"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="h-full w-full cursor-pointer outline-none dark:bg-[#2B3743] dark:text-white"
        >
          <option className="hidden" value="" disabled>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default TopSection;
