import { useState } from "react";
import AnimalShow from "./animal-show";
import './App.css';

function getRandomAnimals(){
  const animals = ['bird', 'cat', 'cow','dog','gator','horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App (){
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return (
      <AnimalShow
        type={animal}
        key={index}></AnimalShow>
    );
  });

  return (<div className="app">
    <h3>Show Animal List</h3>

    <button 
      onClick={handleClick}
      type="submit">
        Add Animal
      </button>

      <div className="animal-list">
        {renderedAnimals}
      </div>
  </div>);
}

export default App;