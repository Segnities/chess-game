import { useEffect, useState } from "react"

import Board from "./components/Board";

import BoardModel from "./models/board-model";

import './App.css';
import PlayerModel from "./models/player-model";
import { ColorsModel } from "./models/colors-model";

function App() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());

  const [whitePlayer, setWhitePlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.WHITE));
  const [blackPlayer, setBlackPlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null);

  const restart = () => {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === ColorsModel.WHITE ? blackPlayer : whitePlayer);
  };

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  useEffect(() => {
    document.title = 'Chess game';
  }, [])

  return (
    <div className="app">
      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  )
}

export default App
