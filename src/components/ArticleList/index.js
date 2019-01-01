import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends PureComponent {

    state = {
        openArticleId: null
    };

    render() {
        console.log(3);

        const articleElements = this.props.articles.map((article, index) =>
            <li onClick={this.handleClick.bind(this, article.id)}
                key={article.id} className="article-list__li">
                <p>{index}</p>
                <Article article={article}
                         isOpen={this.state.openArticleId === article.id}/>
                {console.log(this.state.openArticleId === article.id, this.state.openArticleId, article.id)}
            </li>
        );

        return (
            <ul>{articleElements}</ul>
        )
    }

    handleClick = openArticleId => {
        console.log(openArticleId);
        this.setState({
            openArticleId: openArticleId
        })
    }
}

export default ArticleList
