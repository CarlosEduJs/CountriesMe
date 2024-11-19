import { useContext } from "react";

import { CountriesContext } from "../../Context/CountriesContext";

import { useTheme } from "../../Hooks/useTheme";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const { themeName } = useTheme();

  const { setSearchTerm } = useContext(CountriesContext);

  const themeSettings = {
    dark: {
      bgSearch: "bg-dark-dark-blue",
      textColor: "text-light-very-light-gray",
    },
    light: {
      bgSearch: "bg-white",
      textColor: "text-light-very-dark-blue",
    },
  };

  const theme = themeSettings[themeName] || themeSettings.light;

  return (
  <div className={`flex items-center px-3 gap-3 ${theme.bgSearch} min-w-[230px] shadow-md py-2 rounded-md max-sm:w-full `}>
    <MagnifyingGlassIcon className={`w-4 h-4 ${theme.textColor}`}/>
    <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="outline-none bg-transparent text-sm text-gray-500 w-full" placeholder="Search for a country..." />
  </div>
);
};

export default SearchBar;
