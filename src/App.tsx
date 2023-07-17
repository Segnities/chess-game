import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";


import Board from "./components/Board";

import { restartTimerAction, startTimerAction } from "./store/timerReducer";

import LostFigures from "./components/LostFigures";
import BoardModel from "./models/board-model";
import { ColorsModel } from "./models/colors-model";
import PlayerModel from "./models/player-model";

import TimerMenu from "./components/TimerMenu";

import './App.css';
import LostFiguresMenu from "./components/LostFiguresMenu";


function App() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());

  const [whitePlayer, setWhitePlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.WHITE));
  const [blackPlayer, setBlackPlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.BLACK));

  const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);

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
        <TimerMenu
          setLeftDrawerOpen={setLeftDrawerOpen}
          leftDrawerOpen={leftDrawerOpen}
          restart={restart}
        />
        <div>
          <h1>Chess game</h1>
          <h2>The turn of the {currentPlayer?.color}</h2>
        </div>
        <LostFiguresMenu
          board={board}
          rightDrawerOpen={rightDrawerOpen}
          setRightDrawerOpen={setRightDrawerOpen}
        />
      </div>
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
