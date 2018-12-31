import React from 'react'
import Article from './Article'

function App() {

    const adv = <section>some adv</section>;

    return (
        <div className="hello" style={{color: 'cadetblue'}}>
            <h1>Hello World!</h1>
            {adv}
            <Article/>
            <Article/>
        </div>
    )
}

export default App
