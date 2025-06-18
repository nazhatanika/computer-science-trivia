import './App.css';
import cards from './flashcards';
import {useState} from 'react';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const updateFlipped = () => setFlipped(!flipped);
  const updateCurrentNext = () => {
    const next = (current + 1) % cards.length;
    setCurrent(next);
  };
  const updateCurrentBack = () => {
    const back = (current - 1 + cards.length) % cards.length;
    setCurrent(back);
  }
  const setFlippedFalse = () => setFlipped(false);
  return (
    <div className="App">
      <div className="header">
        <h1>Computer Science Trivia</h1>
        <p>Test your tech knowledge with flashcards on programming, algorithms, history, and more!</p>
        <h3>Total Number of cards: {cards.length}</h3>
      </div>
      <div className = "card-container">
        <div className = {`flashcard ${flipped ? "flipped" : ""}`} onClick={updateFlipped}>
          <p>{flipped ? cards[current].answer : cards[current].question}</p>  
        </div>
      </div>
      <div className="buttons">
        <button onClick = {() => {setFlippedFalse(); updateCurrentBack();}}>Back</button>
        <button onClick= {() => {setFlippedFalse(); updateCurrentNext();}}>Next</button>
      </div>
    </div>
  )
}

export default App