import React, {useRef} from "react";
import getCharacters from "../getCharacter/getCharacters";

function SearchBar({search}) {

    const inputElem = useRef(null)

    const searchCharacters = () => {
        getCharacters("https://gateway.marvel.com:443/v1/public/characters?", inputElem.current.value, "apikey=785b51facf6b88828e3b89fb99aef3e1").then(data => search(data.data.results))
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
