import React, { useEffect, useState } from "react";
import axios from "axios";
import { COUNTRY } from "../../data/data";

const AllCountry = ({ search, region }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(COUNTRY).then((response) => {
      setData(response.data);
    });
  }, []);

  // Correct filtering logic
  const filteredCountries = region
    ? data.filter((country) => country.region === region)
    : data;

  // Filter countries based on search input
  const searchedCountries = filteredCountries.filter((country) =>
    search.toLowerCase() === ""
      ? true
      : country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="grid grid-cols-4 gap-14">
        {searchedCountries.length > 0 ? (
          searchedCountries.map((country) => (
            <div
              key={country.cca3}
              className="w-[280px] justify-between rounded-md border shadow-md dark:border-none dark:bg-[#2B3743]"
            >
              <img
                className="h-[150px] w-full rounded-t-md"
                src={country.flags.png}
                alt={country.flags.alt}
              />
              <div className="p-4">
                <p className="mb-3 text-lg font-semibold dark:text-white">
                  {country.name.common}
                </p>
                <p className="mb-1 text-sm dark:text-white">
                  <strong>Population</strong>: {country.population}
                </p>
                <p className="mb-1 text-sm dark:text-white">
                  <strong>Region</strong>: {country.region}
                </p>
                <p className="mb-1 text-sm dark:text-white">
                  <strong>Capital</strong>:{" "}
                  {country.capital ? country.capital[0] : "N/A"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-lg font-semibold dark:text-white">
            A country you are searching is not available.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCountry;
