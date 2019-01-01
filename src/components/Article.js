import React from 'react'
function Article(props) {

    console.log(props);
    const {article} = props;

    return (
        <div>
            <h2>
                {article.title}
                <button onClick={handleClick}>close</button>
            </h2>
            <section>{article.text}</section>
            <p>
                created: {(new Date(article.date)).toDateString()}
            </p>
        </div>
    )
}

function handleClick() {
    console.log('clicked');
}

export default Article
