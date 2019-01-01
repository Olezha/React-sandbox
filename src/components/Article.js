import React, {Component} from 'react'

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };

        this.handleClick = handleClick.bind(this)
    }

    // state = {
    //     isOpen: true
    // };

    render() {
        const {article} = this.props;
        const open = this.state.isOpen && <section>open</section>;

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>close</button>
                </h2>
                {open}
                <section>{article.text}</section>
                <p>
                    created: {(new Date(article.date)).toDateString()}
                </p>
            </div>
        )
    }
}

function handleClick() {
    this.setState({
        isOpen: !this.state.isOpen
    })
}

export default Article
