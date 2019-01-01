import React, {Component} from 'react'
// import React, {PureComponent} from 'react'

class Article extends Component {
// class Article extends PureComponent {

    // constructor

    state = {
        isOpen: true
    };

    componentWillMount() {
        console.log('Article WillMount');
    }

    // render

    componentDidMount() {
        console.log('Article DidMount');
    }

    // componentWillReceiveProps(nextProps) {
    //     // if (nextProps.isOpen !== this.props.isOpen) {}
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // return nextProps !== this.props || nextState !== this.state;
        return nextState !== this.state;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Article WillUpdate', nextProps, nextState)
    } // -> render -> componentDidUpdate(prevProps, prevState)

    // componentWillUnmount() {}

    render() {
        const {article} = this.props;
        const open = this.state.isOpen && <section><p>open</p></section>;

        return (
            <div className="card">
                <div className="card-header">
                    <button onClick={this.handleClick}
                            className="btn btn-primary float-right">
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                    <h2>{article.title}</h2>
                </div>
                <div className="card-body">
                    {open}
                    <section>{article.text}</section>
                    <p>created: {(new Date(article.date)).toDateString()}</p>
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
