import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import PreAddArticle from '../components/PreAddArticle';
import PreBlogArticle from '../components/PreBlogArticle';
import BlogArticle from '../components/BlogArticle';

const Main = () => {

    if (!localStorage.getItem('articles')) {
        localStorage.setItem('articles', JSON.stringify({
            data: []
        }))
    }

    const [ storage, setStorage ] = useState(
        JSON.parse(localStorage.getItem('articles')).data
    );

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify({
            data: storage
        }));
    }, [storage])

    const handleChangeStorage = (callback) => setStorage(callback(storage));

    const articlePreviewers = storage.map((item, index) => {
        return (
            <Link key={ index } to={ `article/${item.id}` }>
                <PreBlogArticle { ...item } />
            </Link>
        )
    });

    return (
        <main className="main">
            <div className="main__container">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={
                            () => (
                                <>
                                    <PreAddArticle handleChangeStorage={ handleChangeStorage } />
                                    { articlePreviewers }
                                </>
                            )
                        }
                    />
                    <Route
                        path="/article/:id"
                        render={
                            props => (
                                <BlogArticle
                                    {
                                        ...storage.find(i => i.id === Number(props.match.params.id))
                                    }
                                    handleChangeStorage={ handleChangeStorage }
                                />
                            )
                        }
                    />
                </Switch>
            </div>
        </main>
    )
}

export default Main;