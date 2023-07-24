import {
  useEffect,
  useRef,
  useState
} from "react";

import { useDispatch } from "react-redux";

import Board from "./components/Board";

import {
  restartTimerAction,
  startTimerAction
} from "./store/timerReducer";

import BoardModel from "./models/board-model";
import { ColorsModel } from "./models/colors-model";
import PlayerModel from "./models/player-model";

import LeftMenu from "./components/LeftMenu";

import RightMenu from "./components/RightMenu";
import Title from "./components/Title";

import { cloneDeep as _cloneDeep } from "lodash";

import './App.css';


function App() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());
  const [gameHistory, setGameHistory] = useState<BoardModel[]>([]);

  const [whitePlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.WHITE));
  const [blackPlayer] = useState<PlayerModel>(new PlayerModel(ColorsModel.BLACK));

  const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);

  const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0);

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
    }, 1000);
  }

  const updateBoardAndStep = (newBoard: BoardModel) => {
    setBoard(newBoard);
    setGameHistory([...gameHistory, _cloneDeep(newBoard)]);
    setCurrentStep(currentStep + 1);
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
        <LeftMenu
          setLeftDrawerOpen={setLeftDrawerOpen}
          leftDrawerOpen={leftDrawerOpen}
          restart={restart}
          gameHistrory={gameHistory}
        />
        <Title currentPlayer={currentPlayer} />
        <RightMenu
          board={board}
          rightDrawerOpen={rightDrawerOpen}
          setRightDrawerOpen={setRightDrawerOpen}
        />
      </div>
      <Board
        board={board}
        updateBoardAndStep={updateBoardAndStep}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />

    </div>
  )
}

export default App;