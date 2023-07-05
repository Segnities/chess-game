import { useEffect } from "react"

import './App.css';

function App() {

  useEffect(() => {
    document.title = 'Chess game';
  }, [])

  return (
    <div className="app">

    </div>
  )
}

export default App
