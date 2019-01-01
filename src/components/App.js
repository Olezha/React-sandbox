import React from 'react'
import ArticleList from './ArticleList'
import articles from '../articles'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    const adv = <section style={{margin: '20px'}}>some adv</section>;

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">Hello World!</h1>
            </div>
            {adv}
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App
