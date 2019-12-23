import React, { useState } from 'react';

import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

const AddArticle = props => {

    const [ inputValues, setInputValues ] = useState({
        id: 0,
        title: '',
        text: '',
        comments: []
    })

    const handleFormSubmit = () => {
        const storage = JSON.parse(localStorage.getItem('articles')).data;
        const lastId = (
            storage.length
            ?
            (() => storage.sort((a, b) => a.id - b.id)[storage.length - 1].id + 1)()
            :
            0
        );

        props.handleChangeStorage(param => [...param, {...inputValues, id: lastId}]);
        props.toggleViewAddForm();
    }

    const handleChangeInput = event => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
    }

    const formItemLayout = {labelCol: {span: 4},  wrapperCol: {span: 16}}

    return (
        <div
            className="main__adding-form-shadow"
            onClick={ props.toggleViewAddForm }
        >
            <div className="main__adding-form-wrapper">
                <span
                    className="main__close-adding-form"
                    onClick={ props.toggleViewAddForm }
                >
                    Close
                </span>
                <Form
                    className="main__adding-form"
                    layout='horizontal'
                    onClick={ e => e.stopPropagation() }
                >
                    <h1>Add new article</h1>
                    <Form.Item label="Title:" { ...formItemLayout }>
                        <Input
                            placeholder="Article title"
                            name="title"
                            onChange={ handleChangeInput }
                        />
                    </Form.Item>
                    <Form.Item label="Text:" { ...formItemLayout }>
                        <TextArea
                            placeholder="Article"
                            autoSize={{ minRows: 3 }}
                            name="text"
                            onChange={ handleChangeInput }
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="normal"
                            onClick= { handleFormSubmit }
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AddArticle;