import React from 'react';

const Comment = props => {

    const handleDeleteComment = () => {
        props.handleChangeStorage(param => {
            const storage = [...param];
            storage[props.articleId].comments = storage[props.articleId].comments.filter(obj => obj.id !== props.id);
            return storage;
        });
    }

    return (
        <div className="main__article-comment">
            <h3 className="main__comment-author">{ props.name }</h3>
            <div className="main__comment-text">{ props.comment }</div>
            <h5 className="main__comment-delete" onClick={ handleDeleteComment } >Delete</h5>
        </div>
    )
}

export default Comment;