import React, { useState, useEffect } from "react";
import Button from "./button.jsx";

const GuessWinningNumber = () => {
  // console.log("1");
  const numRemaining = 3;
  const [information, setInformation] = useState("GUESS A NUMBER!");
  const [leftMessage, setLeftMessage] = useState("");
  const [guessesRemaining, setGuessesRemaining] = useState(numRemaining);
  const [bgcolor, setBgcolor] = useState("dodgerblue")
  const [losses, setLosses] = useState(false);
  const [answer, setAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState(0);
  const [cls, setCls] = useState("green");
  useEffect(() => {
    setRightAnswer(Math.floor(Math.random() * 10));
  }, [losses]);

  useEffect(() => {
    if (guessesRemaining === 0) {
      setLosses(true);
      setGuessesRemaining(3)
      setInformation('GAME OVER: YOU LOSE!')
      setBgcolor("red")
      setAnswer("")
    }
  }, [guessesRemaining]);

  const randomWinNumber = (answer) => {
    if (guessesRemaining > 0) {
      setGuessesRemaining(prev => prev - 1);
      if (answer === rightAnswer) {
        setInformation("GAME OVER: YOU WON!");
        setGuessesRemaining(3)
        setLeftMessage("Play Again");
        setLosses(true);
        setBgcolor("green")
      } else {
        if (guessesRemaining === 2) {
          setBgcolor("orange")
          setGuessesRemaining(1)
        } else {
          setBgcolor("yellow")
        }
        setLeftMessage("Play");
      }
    }
    else {
      setLosses(true);
    }
  }
  const startAgainButton = () => {
    setInformation("GUESS A NUMBER");
    setLosses(false);
    setLeftMessage("Play Again");
    setBgcolor("dodgerblue")
  };

  // const onClick = () => setCls((cls) => (cls === "red" ? "green" : "red"));
  return (
    <div style={{ backgroundColor: bgcolor, width: '', height: '950px' }}>
      <div className="header">{information}</div>
      <div className="playButtonGuess">
        {(!losses) ? (<p>You have {guessesRemaining} Guesses.</p>) : (<p>The Right Answer is {rightAnswer}</p>)}
      </div>
      {losses ? (
        <div className="playButton">
          <Button onClick={() => startAgainButton()}>{leftMessage}</Button>
        </div>
      ) : (
        <div className="button">
          <Button onClick={() => { randomWinNumber(0)}}>0</Button>
          <Button onClick={() => randomWinNumber(1)}>1</Button>
          {/* <button
        className={cls}
        onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
      >    <Button onClick={() => randomWinNumber(2)}></Button>
       2
      </button> */}
          <Button onClick={() => randomWinNumber(2)}>2</Button>
          <Button onClick={() => randomWinNumber(3)}>3</Button>
          <Button onClick={() => randomWinNumber(4)}>4</Button>
          <Button onClick={() => randomWinNumber(5)}>5</Button>
          <Button onClick={() => randomWinNumber(6)}>6</Button>
          <Button onClick={() => randomWinNumber(7)}>7</Button>
          <Button onClick={() => randomWinNumber(8)}>8</Button>
          <Button onClick={() => randomWinNumber(9)}>9</Button>
        </div>
      )}
    </div>
  );
};

export default GuessWinningNumber;
