import React, {Component} from 'react'

class Article extends Component {

    // constructor

    // componentWillMount() {
    //     console.log('Article WillMount');
    // }

    // render

    // componentDidMount() {
    //     console.log('Article DidMount');
    // }

    // componentWillReceiveProps(nextProps) {
    //     // if (nextProps.isOpen !== this.props.isOpen) {}
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // return nextProps !== this.props || nextState !== this.state;
    //     return nextState !== this.state;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('Article WillUpdate', nextProps, nextState)
    } // -> render -> componentDidUpdate(prevProps, prevState)

    // componentWillUnmount() {}

    render() {
        const {article, isOpen, onButtonClickCallback} = this.props;
        const text = isOpen && <section>{article.text}</section>;

        return (
            <div className="card">
                <div className="card-header">
                    <button onClick={onButtonClickCallback}
                            className="btn btn-primary float-right">
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <h2>{article.title}</h2>
                </div>
                <div className="card-body">
                    {text}
                    <p>created: {(new Date(article.date)).toDateString()}</p>
                </div>
            </div>
        )
    }
}

export default Article
