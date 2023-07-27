const defaultState = {
    isBlocked: false,
};

enum blockActionTypes {
    BLOCK_BOARD = 'BLOCK_BOARD',
    UNBLOCK_BOARD = 'UNBLOCK_BOARD',
}

export const blockReducer = (state = defaultState, action: { type: blockActionTypes }) => {
    switch (action.type) {
        case blockActionTypes.BLOCK_BOARD:
            return {
                ...state,
                isBlocked: true,
            };
        case blockActionTypes.UNBLOCK_BOARD:
            return {
                ...state,
                isBlocked: false,
            };
        default:
            break;
    }
    return state;
}

export const blockBoardAction = () => {
    return { type: blockActionTypes.BLOCK_BOARD };
}

export const unblockBoardAction = () => {
    return { type: blockActionTypes.UNBLOCK_BOARD };
}

