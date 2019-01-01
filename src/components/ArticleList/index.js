import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends PureComponent {

    render() {
        console.log(3);

        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list__li">
                <p>{index}</p>
                <Article article={article}/>
            </li>
        );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ArticleList
