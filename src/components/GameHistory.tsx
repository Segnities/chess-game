import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";

import BoardModel from "../models/board-model";

interface GameHistoryProps {
    history: BoardModel[];
}

export default function GameHistory({
    history,
    ...props
}: GameHistoryProps) {
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
                                <ListItem onClick={()=> console.log(board)
                                }>
                                    <ListItemText
                                        primary={index + 1 + ' step'}
                                        secondary={index % 2 ? 'white' : 'black'}
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