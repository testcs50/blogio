import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'antd';

import EditArticle from './EditArticle';
import Comments from './Comments';

const BlogArticle = props => {

    const [ viewArticleManaging, setViewArticleManaging ] = useState(false);
    const [ viewEditForm, setViewEditForm ] = useState(false);

    const toggleViewArticleManaging = () => setViewArticleManaging(!viewArticleManaging);
    const toggleViewEditForm = () => setViewEditForm(!viewEditForm);

    return (
        <div className="main__article">
            <Link className="main__back" to="/" ><h3>Back</h3></Link>
            <div className="main__article-manage" onClick={ toggleViewArticleManaging }>
                <Icon type="setting" />
                <h3>Manage</h3>
                {
                    viewArticleManaging
                    &&
                    (
                        <div className="main__article-managing" onClick={ e => e.stopPropagation() }>
                            <span className="main__close-article-managing" onClick={ toggleViewArticleManaging }>Close</span>
                            <h3
                                onClick={
                                    () => {
                                        toggleViewEditForm();
                                        toggleViewArticleManaging();
                                    }
                                }
                            >
                                Edit article
                            </h3>
                            <Link
                                to="/"
                                onClick={
                                    () => {
                                        props.handleChangeStorage(
                                            param => param.filter(obj => obj.id !== props.id)
                                        );
                                    }
                                }
                            >
                                <h3>Delete article</h3>
                            </Link>
                        </div>
                    )
                }
                { viewEditForm && <EditArticle toggleViewEditForm={ toggleViewEditForm } { ...props } /> }
            </div>
            <h2 className="main__article-title">{ props.title }</h2>
            <div className="main__article-text">{ props.text }</div>
            <Comments comments={ props.comments } articleId={ props.id } handleChangeStorage={ props.handleChangeStorage } />
        </div>
    )
}

export default BlogArticle;