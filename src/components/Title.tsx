import PlayerModel from "../models/player-model";

interface TitleProps {
    currentPlayer: PlayerModel | null;
}

export default function Title({currentPlayer}: TitleProps) {
    return (
        <div className="app-title">
            <h1>Chess game</h1>
            <h2>The turn of the {currentPlayer?.color}</h2>
        </div>
    )
}