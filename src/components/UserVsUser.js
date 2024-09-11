import React, { useState, useEffect } from "react";

function UserVsUser({ onReset }) {
  const [userChoice, setUserChoice] = useState("rock");
  const [secondUserChoice, setSecondUserChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [secondUserPoints, setSecondUserPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {
    const comboMoves = userChoice + secondUserChoice;
    if (userPoints <= 4 && secondUserPoints <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User 1 got the point");
        if (updatedUserPoints === 5) {
          setGameOver(true);
          setResult("User 1 wins!");
        }
      }
      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedSecondUserPoints = secondUserPoints + 1;
        setSecondUserPoints(updatedSecondUserPoints);
        setTurnResult("User 2 got the point");
        if (updatedSecondUserPoints === 5) {
          setGameOver(true);
          setResult("User 2 wins!");
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
  }, [userChoice, secondUserChoice]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg text-center">
        <div className="text-2xl font-semibold mb-4">
          <h1>User 1 Points: {userPoints}</h1>
          <h1>User 2 Points: {secondUserPoints}</h1>
        </div>

        <div className="flex justify-around mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">User 1</h2>
            <img
              className="user-hand h-20"
              src={`../images/${userChoice}.png`}
              alt="User 1 choice"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">User 2</h2>
            <img
              className="user-hand h-20"
              src={`../images/${secondUserChoice}.png`}
              alt="User 2 choice"
            />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold">User 1, make your choice:</h2>
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => setUserChoice(choice)}
              disabled={gameOver}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2 transition duration-300 hover:bg-blue-600"
            >
              {choice}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold">User 2, make your choice:</h2>
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => setSecondUserChoice(choice)}
              disabled={gameOver}
              className="bg-green-500 text-white py-2 px-4 rounded-lg m-2 transition duration-300 hover:bg-green-600"
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

export default UserVsUser;
