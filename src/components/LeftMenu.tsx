
import { Drawer, Button } from "@mui/material";
import BoardModel from "../models/board-model";

import { RxHamburgerMenu } from "react-icons/rx";
import Timer from "./Timer";

interface LeftMenuProps {
    setLeftDrawerOpen: (isOpen: boolean) => void;
    leftDrawerOpen: boolean;
    gameHistrory: BoardModel[]
    restart: () => void;
}

export default function LeftMenu(props: LeftMenuProps) {
    const {
        leftDrawerOpen,
        setLeftDrawerOpen,
        gameHistrory,
        restart
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
            </Drawer>
        </div>
    );
}