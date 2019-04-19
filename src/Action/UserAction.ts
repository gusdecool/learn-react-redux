import { AnyAction } from 'redux';
import { IUserState } from '../Reducer/UserReducer';

export enum UserActionType {
    CHANGE_NAME
}

export interface IUserAction extends AnyAction {
    payload: IUserState;
}

export function changeName(name: string): IUserAction {
    return {
        type: UserActionType.CHANGE_NAME,
        payload: {
            name
        }
    };
}
