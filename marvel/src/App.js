import './App.css';
import SearchBar from "./search-bar/SearchBar";
import Card from "./card/Card";
import Header from "./header/Header";
import React, {useState} from "react";

function App() {

    const [characterCard, setCharacterCard] = useState(null)
    const search = (str) => {
        setCharacterCard(str)
    }

  return (
    <div className="App">
        <Header title="Marvel Characters Search" />
        <SearchBar search={search}/>
        {characterCard && characterCard.map(character => <Card props={character} key={character.id}/>)}
        <Card/>
    </div>
  );
}

export default App;
