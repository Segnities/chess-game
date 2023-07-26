import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";

import BoardModel from "../models/board-model";
import { nanoid } from "nanoid";
import PlayerModel from "../models/player-model";

interface GameHistoryProps {
    history: BoardModel[];
    whitePlayer: PlayerModel | null;
    blackPlayer: PlayerModel | null;
    setBoard: (board: BoardModel) => void;
    setCurrentPlayer: (player: PlayerModel | null) => void;
    setCurrentStep: (step: number) => void;
}

export default function GameHistory({
    history,
    setBoard,
    ...props
}: GameHistoryProps) {

    const pickHistoryStep = (board: BoardModel, index: number) => {
        const isWhitePlayer = index % 2 === 0;
        setBoard(board);
        props.setCurrentStep(index);
        props.setCurrentPlayer(isWhitePlayer ? props.whitePlayer : props.blackPlayer);
    }

    return (
        <div className="game-history__container">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={12} lg={12}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="p">
                        Game History
                    </Typography>
                    <List dense>
                        {
                            history.map((board, index) => (
                                <ListItem
                                    onClick={() => pickHistoryStep(board, index)
                                    }
                                    key={nanoid()}
                                >
                                    <ListItemText
                                        primary={index + 1 + ' step'}
                                        secondary={index % 2 === 0 ? 'white' : 'black'}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}