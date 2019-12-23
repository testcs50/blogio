import React, { useState } from 'react';

import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

import Comment from './Comment';

const Comments = props => {

    const [ inputValues, setInputValues ] = useState({
        id: 0,
        name: '',
        comment: ''
    });

    const handleChangeInput = event => setInputValues({...inputValues, [event.target.name]: event.target.value});

    const handleFormSubmit = () => {
        props.handleChangeStorage(param => {
            const storage = [...param];
            const lastId = (
                comments.length
                ?
                (() => props.comments.sort((a, b) => a.id - b.id)[props.comments.length - 1].id + 1)()
                :
                0
            );

            storage[props.articleId].comments = [...props.comments, {...inputValues, id: lastId}];

            return storage;
        });

        setInputValues({id: 0, name: '', comment: ''});
    }

    const formItemLayout = {labelCol: {span: 4},  wrapperCol: {span: 8}}
    const formButtonLayout ={wrapperCol: {offset: 4}}

    const comments = props.comments.map((item, index) => (
        <Comment
            key={ index }
            articleId={ props.articleId }
            handleChangeStorage={ props.handleChangeStorage }
            { ...item }
        />
    ));

    return (
        <div className="main__article-comments">
            <h3 className="main__article-title">Comments:</h3>

            { props.comments.length ? comments : <h6>No comments yet</h6> }

            <Form className="main__comment-form" layout='horizontal'>
                <h4 className="main__article-add-comment-h4">Add a comment:</h4>
                <Form.Item label="Name:" { ...formItemLayout }>
                    <Input
                        placeholder="Your Name"
                        name="name"
                        onChange={ handleChangeInput }
                        value={ inputValues.name }
                    />
                </Form.Item>
                <Form.Item label="Comment:" { ...formItemLayout }>
                    <TextArea
                        placeholder="Your Comment"
                        autoSize={{ minRows: 2 }}
                        name="comment"
                        onChange={ handleChangeInput }
                        value={ inputValues.comment }
                    />
                </Form.Item>
                <Form.Item { ...formButtonLayout } >
                    <Button
                        type="normal"
                        onClick= { handleFormSubmit }
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Comments;