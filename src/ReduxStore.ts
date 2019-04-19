import { combineReducers, createStore, Reducer } from 'redux';
import userReducer, { IUserState } from './Reducer/UserReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const combinedReducer: Reducer = combineReducers(
    {
        userReducer
    }
);

export interface IAppState {
    userReducer: IUserState | null;
}

export default createStore(
    combinedReducer,
    devToolsEnhancer({name: 'ReactRedux', trace: true})
);
