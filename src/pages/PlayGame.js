import React, { useState } from "react";
import Game from "../components/Game";

const PlayGame = () => {
  const [gameMode, setGameMode] = useState("");

  const selectGameMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg text-center">
        {!gameMode ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Choose your game mode
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => selectGameMode("computer")}
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Play Against Computer
              </button>
              <button
                onClick={() => selectGameMode("playmate")}
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
              >
                Play with Playmate
              </button>
            </div>
          </>
        ) : (
          <Game mode={gameMode} />
        )}
      </div>
    </div>
  );
};

export default PlayGame;
