import BoardModel from "../models/board-model";

import RightMenuImage from "../assets/img/chess-playing-hand.webp";
import { Drawer } from "@mui/material";
import LostFiguresMenu from "./LostFiguresMenu";

interface RightMenuProps {
    board: BoardModel
    rightDrawerOpen: boolean;
    setRightDrawerOpen: (isOpen: boolean) => void;
}

export default function RightMenu(props: RightMenuProps) {
    const {
        board,
        rightDrawerOpen,
        setRightDrawerOpen
    } = props;

    return (
        <div>
            <div className="right-menu__image">
                <img
                    src={RightMenuImage}
                    alt=""
                    onClick={() => setRightDrawerOpen(true)}
                />
                <Drawer
                    anchor="right"
                    open={props.rightDrawerOpen}
                    onClose={() => setRightDrawerOpen(false)}
                >
                    <LostFiguresMenu
                        board={board}
                        setRightDrawerOpen={setRightDrawerOpen}
                        rightDrawerOpen={rightDrawerOpen}
                    />
                </Drawer>
            </div>
        </div>
    );
}