import React, {Component} from 'react';

class Ref extends Component {

    inputRef = React.createRef();

    componentDidMount = () => {
        console.log("this._myRef: ", this._myRef);
        this._myRef.style.background = "pink";
        this._myRef.value = 123;

        console.log("this.inputRef.current: ", this.inputRef.current);
        this.inputRef.current.style.background = "coral";
        this.inputRef.current.value = 456;
    };

    refMethod = node => {
        node.style.background = "aqua";
    };

    render = () => (
        <div>
            <h2>Ref</h2>
            <input ref={node => this._myRef = node}/>
            <input ref={node => this.refMethod(node)}/>
            <input ref={this.inputRef}/>
        </div>
    );
}

export default Ref;
