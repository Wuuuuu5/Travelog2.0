import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <Search className="headerIcon"/>
                <input type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"/>
            </div>


        </div>


        </>


    )
}

export default SearchBar