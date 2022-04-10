
import React, { useState } from 'react';
import Button from './button.jsx';

const GuessWinningNumber = () => {
  const [round, setRound] = useState(0);
  const [wins, setWins] = useState(0);
  const [randomNumber, setrandomNumber] = useState(0)


  function Random() {
    const maxNumber = 9;
    const randomNumber = setRound(Math.floor((Math.random() * maxNumber) + 1));
    // return console.log(randomNumber)
    setrandomNumber(randomNumber)
    // }

  } 
    const callFlip = (call) => {
    const flip = Math.round(Math.random()) === 0 ? 'heads' : 'tails';
    const wonRound = call === flip; // ! determining whether or not we won the round

    setWins((prevWins) => (wonRound ? prevWins + 1 : prevWins));
    setLosses((prevLosses) => (!wonRound ? prevLosses + 1 : prevLosses));

  };
  return (
    <>

      {randomNumber && 
      
 
          <h2>Your Call</h2>

        
      }
      {!randomNumber && <h2>No flip yet! Make your call below to start a round!</h2>}
      <h1 className="title">GUESS A NUMBER! {wins} {losses}</h1>
      <h3 className="title2" > you guess is {round}{" "}Guesses Left: 3/3</h3>      
      <h3 className="title2" > {round}{" "}Guesses Left: 2/3</h3>
      <h3 className="title2" > {round}{" "}Guesses Left: 1/3</h3>
      <section className="button">
        <Button onClick={() => Random()}>0</Button> 
        <Button onClick={() => Random()}>1</Button> 
        <Button onClick={() => Random()}>2</Button>
        <Button onClick={() => Random()}>3</Button>
        <Button onClick={() => Random()}>5</Button> 
        <Button onClick={() => Random()}>6</Button> 
        <Button onClick={() => Random()}>7</Button>
        <Button onClick={() => Random()}>8</Button>
        <Button onClick={() => Random()}>9</Button> 
        <Button onClick={() => callFlip('tails')}>bb!</Button>
       
        
       
      </section>
    </>
  );
};

export default GuessWinningNumber;
