import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends PureComponent {

    state = {
        openArticleId: null
    };

    render() {
        // console.log(3);

        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list__li">
                {/*<p>{index}</p>*/}
                <Article article={article}
                         isOpen={this.state.openArticleId === article.id}
                         onButtonClickCallback={this.handleClick.bind(this, article.id)}/>
                {/*{console.log(this.state.openArticleId === article.id, this.state.openArticleId, article.id)}*/}
            </li>
        );

        return (
            <div>
                <h2>Articles</h2>
                <ul style={{paddingLeft: 0}}>{articleElements}</ul>
            </div>
        )
    }

    handleClick = openArticleId => {
        console.log(openArticleId);
        this.setState({
            openArticleId:
                this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }
}

export default ArticleList
