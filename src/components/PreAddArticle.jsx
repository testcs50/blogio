import React from 'react';

import { Icon } from 'antd';

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
        </div>
    )
}

export default PreAddArticle;