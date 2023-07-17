import { Drawer } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";

import Timer from "./Timer";

interface TimerMenuProps {
    restart: () => void;
    leftDrawerOpen: boolean;
    setLeftDrawerOpen: (open: boolean) => void;
}

export default function TimerMenu(props: TimerMenuProps) {
    const {
        leftDrawerOpen,
        setLeftDrawerOpen,
        restart,
    } = props;

    return (
        <div className="app-timer-menu">
            <AiOutlineMenu
                size={34}
                color="#000"
                onClick={() => setLeftDrawerOpen(true)}
            />
            <Drawer
                anchor="left"
                open={leftDrawerOpen}
                onClose={() => setLeftDrawerOpen(false)}
            >
                <Timer
                    restart={restart}
                />
            </Drawer>
        </div>
    );
}