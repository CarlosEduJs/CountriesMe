import Toolbar from "../Layout/Toolbar";

import { useContext } from "react";
import { CountriesContext } from "../../Context/CountriesContext";

import { NoSymbolIcon } from "@heroicons/react/24/outline";

import { useTheme } from "../../Hooks/useTheme";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const { themeName } = useTheme();

  const { filteredCountries } = useContext(CountriesContext);

  const themeSettings = {
    dark: {
      bgCard: "bg-dark-dark-blue",
      textColor: "text-light-very-light-gray",
      hoverOpts: "hover:bg-white/20",
    },
    light: {
      bgCard: "bg-white",
      textColor: "text-light-very-dark-blue",
      hoverOpts: "hover:bg-dark-dark-blue/5",
    },
  };

  const theme = themeSettings[themeName] || themeSettings.light;

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const navigate = useNavigate()

  const handleCountryDetails = (countryData) => {
    const country = countryData.name.common
    navigate(`/country/${encodeURIComponent(country)}`)
  }

  return (
    <div className="w-full px-12 gap-4">
      <Toolbar />
      {filteredCountries.length > 0 ? (
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-y-16 mt-6">
          {filteredCountries.map((country, index) => (
            <div
              key={index}
              className={`flex flex-col max-w-[250px] ${theme.bgCard} rounded-lg transition-all ${theme.hoverOpts} cursor-pointer shadow-lg`}
              onClick={() => handleCountryDetails(country)}
            >
              <img
                src={country.flags.svg}
                className="w-full h-[150px] object-cover rounded-t-lg"
              />
              <div className="flex flex-col gap-4 px-5 py-7">
                <h1 className={`text-base font-bold ${theme.textColor}`}>
                  {country.name.common}
                </h1>
                <nav>
                  <ul className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h1 className={`text-xs max-md:text-sm ${theme.textColor} font-bold`}>
                        Population:
                      </h1>
                      <h1 className={`text-xs max-md:text-sm ${theme.textColor}`}>
                        {formatNumber(country.population)}
                      </h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className={`text-xs max-md:text-sm ${theme.textColor} font-bold`}>
                        Region:
                      </h1>
                      <h1 className={`text-xs max-md:text-sm ${theme.textColor}`}>
                        {country.region}
                      </h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className={`text-xs max-md:text-sm ${theme.textColor} font-bold`}>
                        Capital:
                      </h1>
                      <h1 className={`text-xs max-md:text-sm ${theme.textColor}`}>
                        {country.capital}
                      </h1>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 h-screen w-full">
          <NoSymbolIcon className={`w-8 h-8 ${theme.textColor}`} />
          <h1 className={`text-xl ${theme.textColor} font-semibold`}>
            No country found
          </h1>
        </div>
      )}
    </div>
  );
};

export default Countries;
