import React, {Component} from 'react'

class TwoElements extends Component {

    render = () => {
        let {second} = this.props;
        if (second) return <div>second div</div>;
        return <div>div</div>
    }
}

export default TwoElements
