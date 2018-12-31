import React from 'react'
function Article() {

    return (
        <div>
            <h2>Title</h2>
            <section>Text</section>
            <p>
                created: {(new Date()).toDateString()}
            </p>
        </div>
    )
}

export default Article
