import React, {Component} from 'react';

class Statefull extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: ['123', '345', '567', '789'],
            index: 0
        };

        this.method = this.method.bind(this);
    }

    method() {
        console.log('do method');
        let {data, index} = this.state;
        index === data.length - 1 ? index = 0 : index++;
        this.setState({index});
    }

    render() {
        let {method} = this;
        let {data, index} = this.state;

        return (
            <div>
                <h2>Statefull</h2>
                <p onClick={method}>click me {`${data[index]}`}</p>
            </div>
        )
    }
}

export default Statefull
