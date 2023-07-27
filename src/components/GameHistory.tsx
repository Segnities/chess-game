import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";

import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { blockBoardAction, unblockBoardAction } from "../store/blockReducer";

import BoardModel from "../models/board-model";
import PlayerModel from "../models/player-model";
import { RootReducer } from "../store";

interface GameHistoryProps {
    whitePlayer: PlayerModel | null;
    history: BoardModel[];
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
    const dispatch = useDispatch();
    const { isBlocked } = useSelector((state: RootReducer) => state.block);
    const pickHistoryStep = (index: number) => {
        const isWhitePlayer = index % 2 === 1;
        if (index === history.length) {
            dispatch(unblockBoardAction());
        } else if (!isBlocked && history.length !== history.length) {
            dispatch(blockBoardAction());
        }
        setBoard(history[index]);
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
                                    key={nanoid()}
                                    className="history-list__item"
                                    onClick={() => pickHistoryStep(index)
                                    }
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