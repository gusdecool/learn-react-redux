import * as React from 'react';
import * as Style from './Scss/Style.scss';

export default class App extends React.Component<{}> {

    public render(): React.ReactElement<HTMLDivElement> {
        return (
            <div className={Style.center}>
                <h1>Reactjs Typescript Init</h1>
                <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/114/139/tumblr_lgedv2Vtt21qf4x93o1_40020110725-22047-38imqt.jpg"
                    className={Style.itsSomething}
                    alt="it's working"/>
            </div>
        );
    }
}
