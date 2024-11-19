import SearchBar from "../Common/Searchbar";
import SelectRegion from "../Common/Dropdown/SelectRegion";

const Toolbar = () => {
    return (
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-2">
            <SearchBar/>
            <SelectRegion/>
        </div>
    )
}

export default Toolbar