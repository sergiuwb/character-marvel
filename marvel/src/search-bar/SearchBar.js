import React, {useRef} from "react";
import getCharacters from "../getCharacter/getCharacters";

function SearchBar({search}) {

    const inputElem = useRef(null)

    const searchCharacters = (ev) => {
        ev.preventDefault()
        getCharacters("https://gateway.marvel.com:443/v1/public/characters?", inputElem.current.value, "apikey=d18e377555fac63b29387a941ec81d22").then(data => search(data.results))
    }


    return (
            <form className="searchBar">
                <input
                    ref={inputElem}
                    type="text"
                    placeholder="Search characters.."
                    name="inputValue"
                />
                <button type="submit" onClick={searchCharacters}>Search</button>
            </form>
    );
};

export default SearchBar;
