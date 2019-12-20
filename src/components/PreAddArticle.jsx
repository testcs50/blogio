import React from 'react';

import { Icon } from 'antd';

import AddArticle from './AddArticle';

const PreAddArticle = () => {
    return (
        <div className="main__adding-wrapper">
            <Icon
                className="main__adding-icon"
                type="plus-circle"
            />
            <span className="main__adding-link">
                Add new article
            </span>
            <AddArticle />
        </div>
    )
}

export default PreAddArticle;