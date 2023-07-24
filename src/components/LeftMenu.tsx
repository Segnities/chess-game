import BoardModel from "../models/board-model";

interface LeftMenuProps {
    setLeftDrawerOpen: (isOpen: boolean) => void;
    leftDrawerOpen: boolean;
    gameHistrory: BoardModel[]
    restart: () => void;
}

export default function LeftMenu(props:LeftMenuProps) {
    /* const {
        leftDrawerOpen,
        setLeftDrawerOpen,
        gameHistrory,
        restart
    } = props; */
    return (
        <div>

        </div>
    );
}