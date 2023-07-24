import BoardModel from "../models/board-model";

interface RightMenuProps {
    board: BoardModel
    rightDrawerOpen: boolean;
    setRightDrawerOpen: (isOpen: boolean) => void;
}

export default function RightMenu(props: RightMenuProps) {
    return (
        <div>

        </div>
    );
}