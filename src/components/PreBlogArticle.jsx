import React from 'react';

const PreBlogArticle = props => {
    return (
        <div className="main__article-previewer">
            <h2 className="main__article-title-previewer">{ props.title }</h2>
            <div className="main__article-text-previewer">{ props.text }</div>
        </div>
    )
}

export default PreBlogArticle;