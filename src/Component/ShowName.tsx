import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../ReduxStore';

export interface IShowNameProps {
    name: string;
}

class ShowName extends React.Component<IShowNameProps> {

    public render(): React.ReactElement<'div'> {
        const props: IShowNameProps = {...this.props};

        return (
            <div>{props.name}</div>
        );
    }
}

function mapStateToProps(state: IState): IShowNameProps {
    return {
        name: state.userReducer !== null ? state.userReducer.name : 'no name'
    };
}

export default connect(mapStateToProps)(ShowName);
