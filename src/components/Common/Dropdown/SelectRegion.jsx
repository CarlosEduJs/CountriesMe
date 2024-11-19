import Dropdown from "./Dropdown";

import {
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
  EllipsisHorizontalIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

import { useTheme } from "../../../Hooks/useTheme";

import { useState, useContext } from "react";

import { CountriesContext } from "../../../Context/CountriesContext";

const SelectRegion = () => {
  const [selectRegion, setSelectRegion] = useState("All");
  const { themeName } = useTheme();

  const { setRegion } = useContext(CountriesContext);

  const handleSetRegion = (region) => {
    setRegion(region)
    setSelectRegion(region)
  }

  const themeSettings = {
    dark: {
      bgSelect: "bg-dark-dark-blue",
      textColor: "text-light-very-light-gray",
      hoverOpts: "hover:bg-white/20",
    },
    light: {
      bgSelect: "bg-white",
      textColor: "text-light-very-dark-blue",
      hoverOpts: "hover:bg-dark-dark-blue/5",
    },
  };

  const theme = themeSettings[themeName] || themeSettings.light;

  const regions = [
    { nameRegion: "All", icon: GlobeAltIcon },
    { nameRegion: "Africa", icon: GlobeEuropeAfricaIcon },
    { nameRegion: "Americas", icon: GlobeAmericasIcon },
    { nameRegion: "Asia", icon: GlobeAsiaAustraliaIcon },
    { nameRegion: "Europe", icon: GlobeEuropeAfricaIcon },
    { nameRegion: "Oceania", icon: GlobeAsiaAustraliaIcon },
  ];

  return (
    <Dropdown
      buttonContent={
        <div
          className={`flex items-center justify-between rounded-md p-2 ${theme.bgSelect} min-w-[200px] shadow-md`}
        >
          <h1 className={`font-medium text-sm ${theme.textColor}`}>
            Filter by region - {selectRegion}
          </h1>
          <EllipsisHorizontalIcon
            className={`h-4 w-4 cursor-pointer ${theme.textColor}  `}
          />
        </div>
      }
      position={"right"}
    >
      <nav>
        <ul className="flex flex-col gap-2 px-3 py-2 min-w-[200px]">
          {regions.map((region, index) => (
            <li
              key={index}
              className={`${theme.hoverOpts} flex items-center justify-between p-2 cursor-pointer rounded-md`}
              onClick={() => handleSetRegion(region.nameRegion)}
            >
              <div className="flex items-center gap-3">
                <region.icon className={`w-4 h-4 ${theme.textColor}`} />
                <h1 className={`text-sm ${theme.textColor}`}>
                  {region.nameRegion}
                </h1>
              </div>
              {selectRegion === region.nameRegion && (
                <CheckBadgeIcon className={`w-4 h-4 ${theme.textColor}`} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Dropdown>
  );
};

export default SelectRegion;
