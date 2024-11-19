import { createContext, useEffect, useState } from "react";

import api from "../services/api";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    api
      .get("all")
      .then((response) => setCountries(response.data))
      .catch((err) => {
        console.error("Error fetching countries:", err);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      region === "All" || country.region.toLowerCase() === region.toLowerCase();
    const matchesSearchTerm = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearchTerm;
  });

  return (
    <CountriesContext.Provider
      value={{ filteredCountries, setRegion, setSearchTerm }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
