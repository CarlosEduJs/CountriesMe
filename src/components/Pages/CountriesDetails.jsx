import { useTheme } from "../../Hooks/useTheme";
import { useParams, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CountriesContext } from "../../Context/CountriesContext";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CountryDetail = () => {
  const { themeName } = useTheme();

  const navigate = useNavigate();

  const { country } = useParams();

  const { filteredCountries } = useContext(CountriesContext);

  const countryData = filteredCountries.find(
    (item) => item.name.common === decodeURIComponent(country)
  );

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const population = formatNumber(countryData?.population);

  const nativeName = countryData?.name?.nativeName
    ? Object.values(countryData.name.nativeName)[0]?.common
    : countryData?.name?.official || "N/A";

  const currencies = countryData?.currencies
    ? Object.entries(countryData.currencies)
        .map(([key, value]) => `${value.name} (${value.symbol})`)
        .join(", ")
    : "N/A";

  const languages = countryData?.languages
    ? Object.values(countryData.languages).join(", ")
    : "N/A";

  const setInforsCountryList1 = [
    { inforName: "Native Name:", data: nativeName },
    { inforName: "Population:", data: population || "N/A" },
    { inforName: "Region:", data: countryData?.region || "N/A" },
    { inforName: "Subregion:", data: countryData?.subregion || "N/A" },
    { inforName: "Capital:", data: countryData?.capital?.join(", ") || "N/A" },
  ];

  const setInforsCountryList2 = [
    {
      inforName: "Top Level Domain:",
      data: countryData?.tld?.join(", ") || "N/A",
    },
    { inforName: "Currencies:", data: currencies },
    { inforName: "Languages:", data: languages },
  ];

  const borderCountries = countryData?.borders;

  const themeSettings = {
    dark: {
      bgButtons: "bg-dark-dark-blue",
      textColor: "text-light-very-light-gray",
      hoverButtons: "hover:bg-white/20",
    },
    light: {
      bgButtons: "bg-white",
      textColor: "text-light-very-dark-blue",
      hoverButtons: "hover:bg-dark-dark-blue/5",
    },
  };

  const theme = themeSettings[themeName] || themeSettings.light;

  return (
    <div className="w-full px-12 gap-4 flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className={`${theme.bgButtons} ${theme.textColor} ${theme.hoverButtons} max-w-[150px] py-1 px-3 flex items-center gap-1 rounded-md shadow-md`}
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <h1 className="font-normal text-sm">Back</h1>
      </button>

      <div className="flex items-center gap-28 w-full mt-12 max-md:mt-5 max-md:items-start max-lg:flex-col pb-3">
        <img
          className="w-[400px] h-[300px] object-cover rounded-lg"
          src={countryData.flags.svg}
          alt={countryData.name.common + " flag"}
        />
        <div className="flex flex-col gap-10">
          <h1 className={`${theme.textColor} font-bold text-4xl`}>
            {countryData.name.common}
          </h1>
          <div className="flex gap-28 max-md:flex-col max-md:gap-3">
            <div className="flex flex-col gap-3">
              {setInforsCountryList1.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${theme.textColor} `}
                >
                  <h1 className={"font-bold text-sm"}>{info.inforName}</h1>
                  <h1 className={"font-normal text-sm"}>{info.data}</h1>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {setInforsCountryList2.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${theme.textColor} `}
                >
                  <h1 className={"font-bold text-sm"}>{info.inforName}</h1>
                  <h1 className={"font-normal text-sm"}>{info.data}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className={`flex items-center gap-3 ${theme.textColor}`}>
            <h1 className="font-bold text-sm">Border Countries:</h1>
            <div className="flex items-center gap-3 min-w-[200px] max-w-[350px] overflow-x-auto">
              {borderCountries && borderCountries.length > 0 ? (
                borderCountries.map((border, index) => (
                  <button
                    key={index}
                    className={`${theme.bgButtons} rounded-md shadow-md px-4 text-xs`}
                  >
                    {border}
                  </button>
                ))
              ) : (
                <span className="text-sm italic">N/A</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
