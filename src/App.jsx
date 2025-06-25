import './App.css';
import cards from './flashcards';
import {useState} from 'react';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const updateFlipped = () => setFlipped(!flipped);
  const [guess, setGuess] = useState("")
  const [feedback, setFeedback] = useState("")
  const [correct, setCorrect] = useState(0);
  const updateCurrentNext = () => {
    if (current < cards.length -1){
      const next = current + 1;
      setCurrent(next);
      setGuess(" ");
      setFeedback(" ");
      setFlipped(false);
    }
  };
  const updateCurrentBack = () => {
    if (current > 0){
      const back = current -1;
      setCurrent(back);
      setGuess(" ");
      setFeedback(" ");
      setFlipped(false);
    }
  };
  const setFlippedFalse = () => setFlipped(false);
  const answer = cards[current].answer.toLowerCase().replaceAll(" ", "");
  const userGuess = guess.toLowerCase().replaceAll(" ", "");
  return (
    <div className="App">
      <div className="header">
        <h1>Computer Science Trivia</h1>
        <p>Test your tech knowledge with flashcards on programming, algorithms, history, and more!</p>
        <h3>Total Number of cards: {cards.length-1}</h3>
        <h4>Correct answers: {correct}</h4>
      </div>
      <div className = "card-container">
        <div className = {`flashcard ${flipped ? "flipped" : ""}`} onClick={updateFlipped}>
          <p>{flipped ? cards[current].answer : cards[current].question}</p>  
        </div>
      </div>
      <div>
        {current > 0 && (
          <div> 
            <h5>Please enter your guess!</h5>
            <input
            type='text'
            value={guess}
            onChange = {(e) => setGuess(e.target.value)}
            />
            <button onClick= {() => {
              if (userGuess === answer){
                if(feedback != "✅ Correct!"){
                  setCorrect(correct+1);
                }
                setFeedback("✅ Correct!");
              }
              else{
                setFeedback("❌ Try Again");
              }
            }}>Submit</button>
            <p>{feedback}</p>
          </div>
          )}
      </div>
      <div className="buttons">
        <button onClick = {() => {setFlippedFalse(); updateCurrentBack();}} disabled = {current === 0} style = {{opacity: current === 0 ? 0.5:1}}>Back</button>
        <button onClick= {() => {setFlippedFalse(); updateCurrentNext();}} disabled = {current === cards.length -1} style = {{opacity: current === cards.length -1 ? 0.5:1}}>Next</button>
      </div>
    </div>
  )
}

export default App