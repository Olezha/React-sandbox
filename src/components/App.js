import React from 'react'
import ArticleList from './ArticleList'
import articles from '../articles'

function App() {
    const adv = <section>some adv</section>;

    return (
        <div className="hello" style={{color: 'cadetblue'}}>
            <h1>Hello World!</h1>
            {adv}
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App
