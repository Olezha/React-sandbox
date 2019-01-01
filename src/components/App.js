import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../articles'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    state = {
        reverted: false
    };

    render() {
        const adv = <section style={{margin: '20px'}}>some adv</section>;

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Hello World!</h1>
                    <button onClick={this.revert}
                            className="btn btn-primary">Revert
                    </button>
                </div>
                {adv}
                <ArticleList
                    articles={this.state.reverted ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
            // reverted: !this.state.reverted
            reverted: true
        })
    }
}

export default App
