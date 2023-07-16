import { useSelector } from "react-redux";

import { Button } from "@mui/material";

import { RootReducer } from "../store";

interface TimerProps {
    restart: () => void;
}

export default function Timer({
    restart
}: TimerProps) {

    const { whiteFiguresTime, blackFiguresTime } = useSelector((state: RootReducer) => state.timer);

    return (
        <div className="timer">
            <h3>White figures time - {whiteFiguresTime} seconds</h3>
            <h3>Black figures time - {blackFiguresTime} seconds</h3>
            <Button
                variant="contained"
                onClick={() => {
                    restart();
                }}
            >
                Restart game
            </Button>
        </div>
    );
}