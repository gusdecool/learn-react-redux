import * as React from 'react';
import counterStore from './Reducer/Foo';

export default class App extends React.Component<{}> {

    public static foo(): void {
        counterStore.dispatch({type: 'INCREMENT'});
        counterStore.dispatch({type: 'INCREMENT'});
    }

    public render(): React.ReactElement<HTMLDivElement> {
        App.foo();

        return (
            <div>
                <h1>Reactjs Typescript Init</h1>
                <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/114/139/tumblr_lgedv2Vtt21qf4x93o1_40020110725-22047-38imqt.jpg"
                    alt="it's working"/>
            </div>
        );
    }
}
