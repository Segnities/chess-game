import { useEffect, useRef, useState } from "react";
import PlayerModel from "../models/player-model";

interface TimerProps {
    currentPlayer: PlayerModel | null;
    restart: () => void;
}

export default function Timer({
    currentPlayer,
    restart
}: TimerProps) {
    const [whiteFiguresTime, setWhiteFiguresTime] = useState<number>(300);
    const [blackFiguresTime, setBlackFiguresTime] = useState<number>(300);

    const timer = useRef<ReturnType<typeof setInterval> | null>(null);

    const decrementBlackFiguresTime = () => {
        setBlackFiguresTime(prev => prev - 1);
    }
    const decrementWhiteFiguresTime = () => {
        setWhiteFiguresTime(prev => prev - 1);
    }

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === 'white' ? decrementWhiteFiguresTime : decrementBlackFiguresTime;

        timer.current = setInterval(callback, 1000);
    }

    const hanldeRestart = () => {
        setWhiteFiguresTime(300);
        setBlackFiguresTime(300);
    }

    useEffect(() => {
        startTimer();
    }, [currentPlayer?.color]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    restart();
                    hanldeRestart();
                }}>
                    Restart game
                </button>
            </div>
            <h3>White figures time - {whiteFiguresTime} seconds</h3>
            <h3>Black figures time - {blackFiguresTime} seconds</h3>
        </div>
    );
}