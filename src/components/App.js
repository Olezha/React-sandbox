import React from 'react'
import Article from './Article'
import articles from '../articles'

function App() {

    const adv = <section>some adv</section>;

    return (
        <div className="hello" style={{color: 'cadetblue'}}>
            <h1>Hello World!</h1>
            {adv}
            <Article article={articles[0]} foo="bar" flag/>
            <Article article={articles[1]}/>
        </div>
    )
}

export default App
