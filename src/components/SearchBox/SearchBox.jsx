import { IoSearch } from "react-icons/io5";
import './SearchBox.css'

const SearchBox = () => {
    return <div className="searchBox position-relative d-flex align-items-center">
        <IoSearch />
        <input type="text" placeholder="Search here ..."/>
    </div>
}

export default SearchBox;