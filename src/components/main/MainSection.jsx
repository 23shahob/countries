import React, { useState } from "react";
import TopSection from "./TopSection";
import AllCountry from "./AllCountry";
import WestIcon from "@mui/icons-material/West";

const MainSection = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };
  const getNativeName = (country) => {
    if (country.name.nativeName) {
      const nativeNameKey = Object.keys(country.name.nativeName)[0];
      return country.name.nativeName[nativeNameKey].common;
    }
    return "N/A";
  };
  const getLanguages = (country) => {
    if (country.languages) {
      return Object.values(country.languages).join(", ");
    }
    return "N/A";
  };

  return (
    <div className="dark:bg-[#202D36]">
      {selectedCountry ? (
        <div className="min-h-screen px-12 pt-14 md:px-8">
          <button
            onClick={handleBackClick}
            className="mb-16 flex h-10 items-center gap-2 rounded-md px-5 shadow-md dark:bg-[#2B3743] dark:text-white"
          >
            <WestIcon />
            <p> Back</p>
          </button>
          <div className="block items-center gap-10 dark:border-none md:flex lg:gap-20 xl:gap-40">
            <img
              className="mb-8 h-[320px] md:w-[450px]"
              src={selectedCountry.flags.png}
              alt={selectedCountry.flags.alt}
            />
            <div>
              <p className="mb-3 text-2xl font-semibold dark:text-white">
                {selectedCountry.name.common}
              </p>
              <div className="mb-16 block gap-10 lg:flex lg:gap-16 xl:gap-32">
                <div className="mb-5">
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Native Name</strong>:{" "}
                    {getNativeName(selectedCountry)}
                  </p>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Population</strong>: {selectedCountry.population}
                  </p>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Region</strong>: {selectedCountry.region}
                  </p>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Sub Region</strong>: {selectedCountry.subregion}
                  </p>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Capital</strong>:{" "}
                    {selectedCountry.capital
                      ? selectedCountry.capital[0]
                      : "N/A"}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Top Level Domain</strong>:{" "}
                    {selectedCountry.altSpellings[0].toLowerCase()}
                  </p>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Currencies</strong>: Euro
                  </p>
                  <p className="mb-1 text-sm dark:text-white">
                    <strong>Languages</strong>: {getLanguages(selectedCountry)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <strong className="dark:text-white">Border Countries:</strong>
                <div className="flex gap-2">
                  <p
                    className="flex h-7 items-center gap-2 rounded-md px-6
                  shadow-md dark:bg-[#2B3743] dark:text-white"
                  >
                    {selectedCountry.borders
                      ? selectedCountry.borders[0]
                      : "N/A"}
                  </p>
                  <p
                    className="flex h-7 items-center gap-2 rounded-md px-6
                  shadow-md dark:bg-[#2B3743] dark:text-white"
                  >
                    {selectedCountry.borders
                      ? selectedCountry.borders[1]
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <TopSection
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
          />
          <div className="mx-12 mt-14">
            <AllCountry
              search={search}
              region={region}
              handleCountryClick={handleCountryClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
