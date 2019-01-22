import React, {Component} from 'react';

class Binding extends Component {

    constructor(props) {
        super(props);
        this.someMethod = this.someMethod.bind(this);
    }

    state = {
        some: 0
    };

    someMethod() {
        let {some} = this.state;
        console.log('some method', {some});
        some++;
        this.setState({some});
    }

    lambdaFunc = e => {
        let {some} = this.state;
        console.log('lambda method', {some});
        some++;
        this.setState({some});
    };

    render = () => {
        return (
            <div>
                <h2>Binding</h2>
                <button onClick={this.someMethod.bind(this)} className="btn btn-outline-warning btn-sm">
                    Bind in component (anti-pattern)
                </button>
                <button onClick={e => this.someMethod(e)} className="btn btn-outline-warning btn-sm">
                    By Lambdas (not super)
                </button>
                <button onClick={this.someMethod} className="btn btn-outline-warning btn-sm">
                    Bind in constructor
                </button>
                <button onClick={this.lambdaFunc} className="btn btn-outline-warning btn-sm">
                    Lambda func
                </button>
            </div>
        )
    };
}

export default Binding
