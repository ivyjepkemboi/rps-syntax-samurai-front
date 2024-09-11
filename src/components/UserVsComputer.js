import React, { useState, useEffect } from "react";

function UserVsComputer({ onReset }) {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User got the point");
        if (updatedUserPoints === 5) {
          setGameOver(true);
          setResult("User wins!");
        }
      }
      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer got the point");
        if (updatedComputerPoints === 5) {
          setGameOver(true);
          setResult("Computer wins!");
        }
      }
      if (
        comboMoves === "scissorsscissors" ||
        comboMoves === "rockrock" ||
        comboMoves === "paperpaper"
      ) {
        setTurnResult("It's a draw");
      }
    }
  }, [userChoice, computerChoice]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg text-center">
        <div className="text-2xl font-semibold mb-4">
          <h1>User Points: {userPoints}</h1>
          <h1>Computer Points: {computerPoints}</h1>
        </div>

        <div className="flex justify-around mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">User</h2>
            <img
              className="user-hand h-20"
              src={`../images/${userChoice}.png`}
              alt="User choice"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Computer</h2>
            <img
              className="user-hand h-20"
              src={`../images/${computerChoice}.png`}
              alt="Computer choice"
            />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold">Make your choice:</h2>
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleOnClick(choice)}
              disabled={gameOver}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2 transition duration-300 hover:bg-blue-600"
            >
              {choice}
            </button>
          ))}
        </div>

        <div className="text-center">
          <h1 className="text-xl font-bold">{turnResult}</h1>
          <h1 className="text-2xl font-semibold text-purple-600">{result}</h1>
        </div>

        {gameOver && (
          <button
            onClick={onReset}
            className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Restart Game?
          </button>
        )}
      </div>
    </div>
  );
}

export default UserVsComputer;
