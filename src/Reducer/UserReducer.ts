import { IUserAction, UserActionType } from '../Action/UserAction';

export interface IUserState {
    name: string;
}

export default function userReducer(state: IUserState | null = null, action: IUserAction): IUserState | null {
    if (action.type === UserActionType.CHANGE_NAME) {
        return {
            ...state,
            name: action.payload.name
        };
    }

    return state;
}
