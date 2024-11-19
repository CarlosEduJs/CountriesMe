import SelectMode from "../Common/ToggleTheme";

import { useTheme } from "../../Hooks/useTheme";

const Header = () => {
  const { themeName } = useTheme();

  const themeSettings = {
    dark: {
      bgHeader: "bg-dark-very-dark-blue",
      textColor: "text-light-very-light-gray",
    },
    light: {
      bgHeader: "bg-white",
      textColor: "text-light-very-dark-blue",
    },
  };

  const theme = themeSettings[themeName] || themeSettings.light;
  return (
    <header
      className={`p-4 ${theme.bgHeader} px-10 shadow-lg flex items-center justify-between`}
    >
      <h1 className={`font-bold text-xl ${theme.textColor}`}>CountriesMe</h1>
      <SelectMode />
    </header>
  );
};

export default Header;
