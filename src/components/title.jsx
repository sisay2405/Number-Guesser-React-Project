import React, { useState } from "react";

// generate random number
let randomNumber = Math.round(Math.random() * 10);

const GuessTheNumber = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");

  const onClick = () => {
    const userGuess = parseInt(value, setValue); // convert string to integer

    // If the user clicks 'Guess' without entering a number, ask them to pick a number
    setResults(<p className="alert alert-danger">Pick a number</p>);

    // If user input matches randomNumber, user guess is Correct!
    if (userGuess === randomNumber)
      setResults(<p className="alert alert-success">Correct!</p>);
    // If user input is higher than randomNumber, user guess is 'Too high'
    if (userGuess > randomNumber)
      setResults(<p className="alert alert-warning">Too high, guess again</p>);

    // If user input is lower than randomNumber, user guess is 'Too low'
    if (userGuess < randomNumber)
      setResults(<p className="alert alert-warning">Too low, guess again</p>);
  };

  return (
    <>
      <h2>Guess The Number game</h2>
      <p className="lead">Guess a number between 1 and 10.</p>
      <input
        value={value}
        type="number"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
      <br />
      <br />
      {results}
    </>
  );
};

export default GuessTheNumber;