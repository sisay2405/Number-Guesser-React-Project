import React, { useState, useEffect } from "react";
import Button from "./button.jsx";
const buttonsArr = [
  {
    value: 0,
    disabled: false
  },
  {
    value: 1,
    disabled: false
  },
  {
    value: 2,
    disabled: false
  },
  {
    value: 3,
    disabled: false
  },
  {
    value: 4,
    disabled: false
  },
  {
    value: 5,
    disabled: false
  },
  {
    value: 6,
    disabled: false
  },
  {
    value: 7,
    disabled: false
  },
  {
    value: 8,
    disabled: false
  },
  {
    value: 9,
    disabled: false
  },
]
const GuessWinningNumber = () => {
  // console.log("1");
  const numRemaining = 3;
  const [information, setInformation] = useState("GUESS A NUMBER!");
  const [leftMessage, setLeftMessage] = useState("");
  const [guessesRemaining, setGuessesRemaining] = useState(numRemaining);
  const [bgcolor, setBgcolor] = useState("dodgerblue")
  const [losses, setLosses] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [buttons, setButtons] = useState(buttonsArr)
  // const [cls, setCls] = useState("green");
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
          {
            buttons.map(
              (button) => (
                <Button type="button" onClick={() => randomWinNumber(button.value)}>
                  {button.value}
                </Button>
              )
            )
          }
        </div>
      )}
    </div>
  );
};

export default GuessWinningNumber;
