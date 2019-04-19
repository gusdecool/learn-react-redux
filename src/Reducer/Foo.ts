import { createStore as createReduxStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counterFunction(state: number = 0, action: {type: string}): number {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Create a Redux counterStore holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const counterStore: Store = createReduxStore(
    counterFunction,
    devToolsEnhancer({name: 'counterFunction', trace: true})
);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

counterStore.subscribe(() => console.log(counterStore.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
counterStore.dispatch({ type: 'INCREMENT' });
// 1
counterStore.dispatch({ type: 'INCREMENT' });
// 2
counterStore.dispatch({ type: 'DECREMENT' });
// 1

export default counterStore;
