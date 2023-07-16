import { useEffect, useState, useRef } from "react";

import { useDispatch } from "react-redux";

import { Drawer, Button } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";

import Board from "./components/Board";

import { startTimerAction, restartTimerAction } from "./store/timerReducer";

import BoardModel from "./models/board-model";
import PlayerModel from "./models/player-model";
import { ColorsModel } from "./models/colors-model";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

import './App.css';


function App() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());

  const [whitePlayer, setWhitePlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.WHITE));
  const [blackPlayer, setBlackPlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.BLACK));

  const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);

  const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const dispatch = useDispatch();

  const restart = () => {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
    dispatch(restartTimerAction());
  }

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      if (currentPlayer?.color) {
        dispatch(startTimerAction(currentPlayer.color));
      }
    }, 1000)
  }

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === ColorsModel.WHITE ? blackPlayer : whitePlayer);
  };

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);


  useEffect(() => {
    startTimer();
  }, [currentPlayer?.color]);

  return (
    <div className="app">
      <div className="app-info">
        <Button variant="contained" onClick={() => setLeftDrawerOpen(true)}>
          <AiOutlineMenu size={24} color="#fff" />
        </Button>
        <Drawer
          anchor="left"
          open={leftDrawerOpen}
          onClose={() => setLeftDrawerOpen(false)}
        >
          <Timer
            restart={restart}
          />
          
        </Drawer>
        <div>
          <h1>Chess game</h1>
          <h2>The turn of the {currentPlayer?.color}</h2>
        </div>
      </div>
      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div className="app-lost-figures">
        <LostFigures
          title="Lost black figures"
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title="Lost white figures"
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  )
}

export default App
