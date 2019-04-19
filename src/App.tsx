import * as React from 'react';
import { Provider } from 'react-redux';
import ReduxStore from './ReduxStore';
import ShowName from './Component/ShowName';

export default class App extends React.Component<{}> {

    public render(): React.ReactElement<HTMLDivElement> {
        return (
            <Provider store={ReduxStore}>
                <ShowName/>
            </Provider>
        );
    }
}
