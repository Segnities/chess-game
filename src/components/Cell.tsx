import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import CellModel from "../models/cell-model";


interface CellProps {
    cell: CellModel;
    selected: boolean;
    onCellClick: (cell: CellModel) => void;
}

export default function Cell({ cell, selected, onCellClick }: CellProps) {
    const { isBlocked } = useSelector((state: RootReducer) => state.block);

    const available = cell.available && !cell.figure;

    const hanldeFigureAction = () => {
        if (!isBlocked) {
            onCellClick(cell);
        }
    }

    return (
        <div
            className={
                [
                    "cell",
                    cell.color,
                    selected ? "selected" : '',
                    cell.available && cell.figure ? 'available-to-attack' : ''
                ].join(' ')
            }
            onClick={hanldeFigureAction}
        >
            {available && <div className="available" />}
            {
                cell.figure?.logo && (
                    <img
                        src={cell.figure.logo}
                        alt="figure"
                        onDragStart={e => e.preventDefault()}
                    />
                )
            }
        </div>
    );
}