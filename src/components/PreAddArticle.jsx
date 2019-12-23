import React, { useState } from 'react';

import { Icon } from 'antd';

import AddArticle from './AddArticle';

const PreAddArticle = ({ handleChangeStorage }) => {

    const [ viewAddForm, setViewAddForm ] = useState(false);

    const toggleViewAddForm = () => setViewAddForm(!viewAddForm);

    return (
        <div className="main__adding-wrapper">
            <Icon
                className="main__adding-icon"
                type="plus-circle"
                onClick={ toggleViewAddForm }
            />
            <span
                className="main__adding-link"
                onClick={ toggleViewAddForm }
            >
                Add new article
            </span>
            {
                viewAddForm
                &&
                <AddArticle
                    toggleViewAddForm={ toggleViewAddForm }
                    handleChangeStorage={ handleChangeStorage }
                />
            }
        </div>
    )
}

export default PreAddArticle;