import { useTheme } from "../../Hooks/useTheme";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const SelectMode = () => {
  const { themeName, handleTheme } = useTheme();

  return (
    <div
      className={`flex items-center border p-1 rounded-lg ${
        themeName === "dark" ? "border-gray-100/10" : ""
      } max-w-[58px]`}
    >
      <div
        onClick={() => handleTheme("dark")}
        className={`flex items-center cursor-pointer justify-center p-1 rounded-lg  ${
          themeName === "dark"
            ? "bg-slate-900 text-blue-500 hover:bg-gray-100/10"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        <MoonIcon className="w-4 h-4" />
      </div>
      <div
        onClick={() => handleTheme("light")}
        className={`flex items-center cursor-pointer justify-center p-1 rounded-lg  ${
          themeName === "light"
            ? "bg-gray-200 text-yellow-500 hover:bg-gray-100 "
            : "text-gray-500 hover:bg-gray-100/10"
        }`}
      >
        <SunIcon className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SelectMode;
