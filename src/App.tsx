import { useEffect, useState } from "react"

import Board from "./components/Board";

import BoardModel from "./models/board-model";

import './App.css';

function App() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());

  const restart = () => {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, []);

  useEffect(() => {
    document.title = 'Chess game';
  }, [])

  return (
    <div className="app">
      <Board
        board={board}
        setBoard={setBoard}
      />
    </div>
  )
}

export default App
