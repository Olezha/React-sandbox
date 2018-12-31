import React from 'react'
import {render} from 'react-dom'

function App() {

    const adv = <section>some adv</section>

    return (
        <div className="hello" style={{color: 'cadetblue'}}>
            <h1>Hello World!</h1>
            {adv}
            <Article/>
            <Article/>
        </div>
    )
}

function Article() {

    return (
        <div>
            <h2>Title</h2>
            <section>Text</section>
            <p>
                created: {(new Date).toDateString()}
            </p>
        </div>
    )
}

render(<App/>, document.getElementById('root'));
