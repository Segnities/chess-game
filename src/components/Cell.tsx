import CellModel from "../models/cell-model";

interface CellProps {
    cell: CellModel;
    selected: boolean;
    onCellClick: (cell: CellModel) => void;
}

export default function Cell({ cell, selected, onCellClick }: CellProps) {
    return (
        <div
            className={["cell", cell.color, selected && "selected"].join(' ')}
            onClick={() => onCellClick(cell)}
        >
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