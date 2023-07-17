import { Drawer } from "@mui/material";

import LostFigures from "./LostFigures";

import BoardModel from "../models/board-model";

import ChessImage from "../assets/img/chess-2489553_1280.jpg";


interface LostFiguresMenuProps {
    rightDrawerOpen: boolean;
    setRightDrawerOpen: (value: boolean) => void;
    board: BoardModel;
}

export default function LostFiguresMenu(props: LostFiguresMenuProps) {
    const {
        rightDrawerOpen,
        setRightDrawerOpen,
        board
    } = props;
    return (
        <div className="lost-figures-menu">
            <div className="lost-figure-img" onClick={() => setRightDrawerOpen(true)}>
                <img src={ChessImage} alt="" />
            </div>
            <Drawer
                anchor="right"
                open={rightDrawerOpen}
                onClose={() => setRightDrawerOpen(false)}
            >
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
            </Drawer>
        </div>
    );
}