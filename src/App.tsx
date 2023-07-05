import { useEffect, useState } from "react"

import Board from "./components/Board";

import './App.css';
import BoardModel from "./models/board-model";

function App() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());

  const restart = () => {
    const newBoard = new BoardModel();
    newBoard.initCells();
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
      <Board />
    </div>
  )
}

export default App
