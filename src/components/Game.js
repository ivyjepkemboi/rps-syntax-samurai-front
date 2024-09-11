import React, { useState } from "react";

const Game = ({ mode }) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playmateChoice, setPlaymateChoice] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [result, setResult] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const determineWinner = (player1, player2) => {
    if (player1 === player2) return "It's a tie!";
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      return "Player 1 wins!";
    }
    return "Player 2 wins!";
  };

  const playAgainstComputer = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(determineWinner(choice, computerRandomChoice));
  };

  const playWithPlaymate = (choice) => {
    if (currentPlayer === 1) {
      setPlayerChoice(choice);
      setCurrentPlayer(2);
    } else {
      setPlaymateChoice(choice);
      setResult(determineWinner(playerChoice, choice));
      setCurrentPlayer(1);
    }
  };

  const handleChoice = (choice) => {
    if (mode === "computer") {
      playAgainstComputer(choice);
    } else {
      playWithPlaymate(choice);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        {mode === "computer" ? "Playing Against Computer" : `Player ${currentPlayer}, make your choice`}
      </h2>
      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={() => handleChoice("rock")}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Rock
        </button>
        <button
          onClick={() => handleChoice("paper")}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Paper
        </button>
        <button
          onClick={() => handleChoice("scissors")}
          className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Scissors
        </button>
      </div>

      {result && (
        <div className="text-center mt-6">
          {mode === "computer" ? (
            <>
              <h3 className="text-xl font-semibold text-gray-700">You chose: {playerChoice}</h3>
              <h3 className="text-xl font-semibold text-gray-700">Computer chose: {computerChoice}</h3>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-gray-700">Player 1 chose: {playerChoice}</h3>
              <h3 className="text-xl font-semibold text-gray-700">Player 2 chose: {playmateChoice}</h3>
            </>
          )}
          <h2 className="text-2xl font-bold text-purple-600 mt-4">{result}</h2>
        </div>
      )}
    </div>
  );
};

export default Game;
