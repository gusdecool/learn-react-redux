import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../ReduxStore';
import { changeName } from '../Action/UserAction';
import { AnyAction } from 'redux';

// ------------------------------------------------------------------------------------------------
// Mapped Props & State
// ------------------------------------------------------------------------------------------------

/**
 * Available mapped Redux Store for this Component
 */
interface IShowNameProps {
    name: string;
}

/**
 * Available mapped functions for Redux Dispatch in this Component
 */
interface IDispatch {
    changeName(name: string): void;
}

/**
 * The react traditional local props
 */
interface IOwnProps {
    level: string;
}

interface ICombinedProps extends IShowNameProps, IDispatch, IOwnProps {}

// ------------------------------------------------------------------------------------------------
// React Component
// ------------------------------------------------------------------------------------------------

/**
 * Example for React Redux Component in the most basic way
 */
class ShowName extends React.Component<ICombinedProps> {

    public constructor(props: ICombinedProps) {
        super(props);

        props.changeName('Budi');
    }

    public render(): React.ReactElement<'div'> {
        const props: ICombinedProps = {...this.props};

        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Level: {props.level}</div>
            </div>
        );
    }
}

// ------------------------------------------------------------------------------------------------
// Redux Mapping
// ------------------------------------------------------------------------------------------------

function mapStateToProps(state: IAppState): IShowNameProps {
    return {
        name: state.userReducer !== null ? state.userReducer.name : 'no name'
    };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void): IDispatch {
    return {
        changeName(name: string): void {
            dispatch(changeName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowName);
