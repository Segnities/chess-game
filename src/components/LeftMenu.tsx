
import { Drawer } from "@mui/material";
import BoardModel from "../models/board-model";

import { RxHamburgerMenu } from "react-icons/rx";
import GameHistory from "./GameHistory";
import Timer from "./Timer";
import PlayerModel from "../models/player-model";

interface LeftMenuProps {
    whitePlayer: PlayerModel | null;
    blackPlayer: PlayerModel | null;
    setLeftDrawerOpen: (isOpen: boolean) => void;
    leftDrawerOpen: boolean;
    gameHistrory: BoardModel[]
    restart: () => void;
    setBoard: (board:BoardModel)=> void;
    setCurrentPlayer: (player:PlayerModel | null)=> void;
    setCurrentStep: (step:number) => void;
}

export default function LeftMenu(props: LeftMenuProps) {
    const {
        leftDrawerOpen,
        setLeftDrawerOpen,
        gameHistrory,
        restart,
    } = props;
    return (
        <div>
            <RxHamburgerMenu
                size={34}
                color="#000"
                onClick={() => setLeftDrawerOpen(true)}
                className="left-menu__hamburger"
            />
            <Drawer
                anchor="left"
                open={leftDrawerOpen}
                onClose={() => setLeftDrawerOpen(false)}
            >
                <div className="left-menu__drawer">
                    <Timer restart={restart} />
                </div>
                <GameHistory 
                    history={gameHistrory}
                    whitePlayer={props.whitePlayer}
                    blackPlayer={props.blackPlayer}
                    setBoard={props.setBoard}
                    setCurrentPlayer={props.setCurrentPlayer}
                    setCurrentStep={props.setCurrentStep}
                />
            </Drawer>
        </div>
    );
}