import React, {Component} from 'react';

class Toggler extends Component {

    render = () => {
        let {name, children, changeStatus, activeToggler} = this.props;

        return (
            <div>
                <h3>Toggler</h3>
                {
                    React.Children.map(children, ChildrenItem => {
                        if (ChildrenItem.props.name === activeToggler)
                            return React.cloneElement(ChildrenItem, {
                                name: ChildrenItem.props.name,
                                active: true,
                                changeStatus: changeStatus
                            });
                        else
                            return React.cloneElement(ChildrenItem, {
                                name: ChildrenItem.props.name,
                                changeStatus: changeStatus
                            });
                    })
                }
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
