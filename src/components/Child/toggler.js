import React, {Component} from 'react';

class Toggler extends Component {

    render = () => {
        return (
            <div>
                <h3>Toggler</h3>
                {this.props.children}
            </div>
        )
    }
}

export default Toggler;

export const TogglerItem = ({name, active, changeStatus}) => {
    return (
        <div className={active === true ? "togglerItem active" : "togglerItem"}
             data-value={name}
             onClick={changeStatus !== undefined ? changeStatus : null}>
            {name}
        </div>
    )
};
