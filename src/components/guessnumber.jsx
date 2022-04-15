import React, { useState, useEffect } from "react";
import Button from "./button.jsx";
import { nanoid } from 'nanoid';
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
  }
]
const GuessWinningNumber = () => {

  const numRemaining = 3;
  const [leftMessage, setLeftMessage] = useState("");
  const [guessesRemaining, setGuessesRemaining] = useState(numRemaining);
  const [bgcolor, setBgcolor] = useState("dodgerblue");
  const [loss, setLoss] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [information, setInformation] = useState("GUESS A NUMBER!");
  const [buttons, setButtons] = useState(buttonsArr);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setRightAnswer(Math.floor(Math.random() * 10));
  }, [loss]);

  useEffect(() => {
    if (guessesRemaining === 0) {
      setLoss(true);
      setGuessesRemaining(3);
      setInformation('GAME OVER: YOU LOSE!');
      setBgcolor("red");
      setAnswer("");
    }
  }, [guessesRemaining]);

  const randomWinNumber = (answer) => {
 
    if (guessesRemaining > 0) {
      setGuessesRemaining(prev => prev - 1);
      setDisabled(true);
      if (answer === rightAnswer) {
        setInformation("GAME OVER: YOU WON!");
        setGuessesRemaining(3);
        setLeftMessage("Play Again");
        setLoss(true);
        setBgcolor("green");
      } else {
        let newbuttons = buttons.map((button) => {
          if (button.value === answer) {
            return { ...button, disabled:true} 
          }
          return button
        })
        setButtons(newbuttons)
        if (guessesRemaining === 2) {
          setBgcolor("orange");
          setGuessesRemaining(1);
        } else {
          setBgcolor("yellow");
        }
        setLeftMessage("Play");
      }
    }
    else {
      setLoss(true);
    }
  }
  const startAgainButton = () => {
    setInformation("GUESS A NUMBER");
    setLoss(false);
    setLeftMessage("Play Again");
    setBgcolor("dodgerblue");
    window.location.reload(false);

  };
  return (
    <div style={{ backgroundColor: bgcolor, width: '', height: '950px' }}>
      <div className="header">{information}</div>
      <div className="playButtonGuess">
        {(!loss) ? (<p>You have {guessesRemaining} Guesses.</p>) : (<p>If You want paly again , press the play button </p>)}
      </div>
      {loss ? (
        <div className="playButton">
          <Button onClick={() => startAgainButton()}>{leftMessage}</Button>
        </div>
      ) : (
        <div className="button">
            {buttons.map((button) => (
              <Button type="button" key={nanoid()} disabled={button.disabled}  onClick={() => randomWinNumber(button.value)}>{button.value}</Button>
              )
            )
          }
        </div>
      )}  
      <div className="copyRight">  © 2022:Byte Me Bitwise React</div> 
      {/* <div className="copyRight">  © 2022:Byte Me <a target="_blank" href="http://sisayareaya.com/"> Bitwise React</a> </div>  */}
    </div>
  );
};

export default GuessWinningNumber;
