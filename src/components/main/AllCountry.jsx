import React, { useEffect, useState } from "react";
import axios from "axios";
import { COUNTRY } from "../../data/data";

const AllCountry = ({ search, region, handleCountryClick }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log("Fetching data from API...");
      const response = await axios.get(COUNTRY);
      console.log("Data fetched successfully:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
    console.table(data);
  }, []);

  const filteredCountries = region
    ? data.filter((country) => country.region === region)
    : data;

  const searchedCountries = filteredCountries.filter((country) =>
    search.toLowerCase() === ""
      ? true
      : country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
      {searchedCountries.length > 0 ? (
        searchedCountries.map((country) => (
          <div
            key={country.cca3}
            className="cursor-pointer justify-between rounded-md border shadow-md hover:scale-[100.5%] hover:shadow-yellow-500 dark:border-none dark:bg-[#2B3743] md:w-[250px] lg:w-[240px] xl:w-[280px]"
            onClick={() => handleCountryClick(country)}
          >
            <img
              className="h-[250px] w-full rounded-t-md sm:h-[150px]"
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
