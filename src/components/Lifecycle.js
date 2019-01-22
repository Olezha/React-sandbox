import React, {Component} from 'react'

class Lifecycle extends Component {

    constructor(props) {
        super(props);
        console.log('0. Constructor');

        this.state = {some: true, posts: []};
        this.someMethod = this.someMethod.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('1. getDerivedStateFromProps');
        return prevState;
    }

    componentDidMount() {
        console.log('3. componentDidMount');

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then(
                res => res.json()
            ).then(data => {
                this.setState({posts: data});
            });
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('4. shouldComponentUpdate');
        return this.state.some || this.state.posts !== nextState.posts;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('4. getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(previousProps, previousState, snapshotFromGetSnapshotBeforeUpdate) {
        console.log('5. componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount');
    }

    someMethod() {
        console.log('Some method');
        this.setState({some: !this.state.some});
    }

    render = () => {
        console.log('2. render');

        return (
            <div>
                <h2><a
                    href="https://medium.com/@nancydo7/understanding-react-16-4-component-lifecycle-methods-e376710e5157"
                    target="_blank" rel="noopener noreferrer">
                    Lifecycle 16.4
                </a></h2>
                <button onClick={this.someMethod} className="btn btn-outline-warning btn-sm">Change state</button>
                <div className="card" style={{marginTop: '20px', padding: '10px'}}>
                    {
                        this.state.posts.length === 0 ? (<div>Loading ...</div>) : (
                            <div>
                                <h5>{this.state.posts[0].title}</h5>
                                <p>{this.state.posts[0].body}</p>
                                <p style={{color: '#007bff'}}>and more {this.state.posts.length - 1} posts ...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Lifecycle
