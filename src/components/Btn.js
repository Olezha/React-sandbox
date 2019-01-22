import React, {Component} from 'react';

class Btn extends Component {

    static defaultProps = {
        text: 'Btn',
        action: () => {
            console.log('Button default action')
        }
    };

    render = () => {
        const {text, action, additionalProps} = this.props;

        return (
            <button onClick={action} className="btn btn-outline-warning btn-sm">
                {text}
                {additionalProps}
            </button>
        )
    };
}

// Btn.defaultProps = {
//     text: 'Btn',
//     action: () => {
//         console.log('Button default action')
//     }
// };

export default Btn
