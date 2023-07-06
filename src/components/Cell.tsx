import CellModel from "../models/cell-model";

interface CellProps {
    cell: CellModel;
}

export default function Cell({cell}:CellProps) {
    return (
        <div className={["cell", cell.color].join(' ')}></div>
    );
}