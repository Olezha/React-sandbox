import React, {Component} from 'react'

class Article extends Component {

    state = {
        isOpen: true
    };

    render() {
        const {article} = this.props;
        const open = this.state.isOpen && <section>open</section>;

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {open}
                <section>{article.text}</section>
                <p>
                    created: {(new Date(article.date)).toDateString()}
                </p>
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
