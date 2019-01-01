import React, {Component} from 'react'

class Article extends Component {

    state = {
        isOpen: true
    };

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
