import CellModel from "../models/cell-model";

interface CellProps {
    cell: CellModel;
    selected: boolean;
    onCellClick: (cell: CellModel) => void;
}

export default function Cell({ cell, selected, onCellClick }: CellProps) {
    const available = cell.available && !cell.figure;
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
            onClick={() => onCellClick(cell)}
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