import { ColorsModel } from "../models/colors-model";

const defaultState = {
    whiteFiguresTime: 300,
    blackFiguresTime: 300,
}

enum TimerReducerActionTypes {
    START_TIMER = 'START_TIMER',
    RESTART_TIMER = 'RESTART_TIMER',
}

export const timerReducer = (state = defaultState, action: { type: TimerReducerActionTypes, playerColor: ColorsModel }) => {
    if (
        (action.type === TimerReducerActionTypes.START_TIMER) &&
        (action.playerColor === ColorsModel.WHITE)
    ) {
        return {
            ...state,
            whiteFiguresTime: state.whiteFiguresTime - 1,
            blackFiguresTime: 300,
        }
    }

    if (
        (action.type === TimerReducerActionTypes.START_TIMER) &&
        (action.playerColor === ColorsModel.BLACK)
    ) {
        return {
            ...state,
            blackFiguresTime: state.blackFiguresTime - 1,
            whiteFiguresTime: 300, 
        }
    }

    if (action.type === TimerReducerActionTypes.RESTART_TIMER) {
        return {
            ...state,
            whiteFiguresTime: 300,
            blackFiguresTime: 300,
        }
    } 
    return state;
}

export const startTimerAction = (playerColor: ColorsModel) => {
    return { type: TimerReducerActionTypes.START_TIMER, playerColor }
};

export const restartTimerAction = () => {
    return { type: TimerReducerActionTypes.RESTART_TIMER };
}