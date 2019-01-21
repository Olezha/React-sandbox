import React, {Component} from 'react';

class StatefullES7 extends Component {

    state = {
        data: ['123', '345', '567', '789'],
        index: 0
    };

    static defaultProps = {
        def: 'DEF'
    };

    someVal = 'some val';

    method = event => {
        let {data, index} = this.state;
        index === data.length - 1 ? index = 0 : index++;
        this.setState({index})
    };

    render = () => {
        let {method} = this;
        let {data, index} = this.state;
        return (
            <div>
                <h2>Statefull ES7</h2>
                <p onClick={method}>click me {`${data[index]}`}</p>
            </div>
        )
    };
}

export default StatefullES7
