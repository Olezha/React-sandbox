import React, {Component} from 'react';

class Btn extends Component {

    render = () => {
        const {text, action} = this.props;

        return (
            <button onClick={action} className="btn btn-outline-warning btn-sm">{text}</button>
        )
    };
}

Btn.defaultProps = {
    action: () => {
        console.log('Button default action')
    }
};

export default Btn
