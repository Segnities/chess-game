import { useEffect } from "react"

import './App.css';
import Board from "./components/Board";

function App() {

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
