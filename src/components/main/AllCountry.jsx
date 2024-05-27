import React, { useEffect, useState } from "react";
import axios from "axios";
import { COUNTRY } from "../../data/data";

const AllCountry = ({ search, region, handleCountryClick }) => {
  const [data, setData] = useState([]);
  console.log(data);

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
    <div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14">
      {searchedCountries.length > 0 ? (
        searchedCountries.map((country) => (
          <div
            key={country.cca3}
            className="lg:w-[240px] md:w-[250px] xl:w-[280px] cursor-pointer justify-between rounded-md border shadow-md dark:border-none dark:bg-[#2B3743]"
            onClick={() => handleCountryClick(country)}
          >
            <img
              className="h-[250px] sm:h-[150px] w-full rounded-t-md"
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
  );
};

export default AllCountry;
