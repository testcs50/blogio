import React, { useState } from 'react';

import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

const EditArticle = props => {

    const [ inputValues, setInputValues ] = useState({
        id: props.id,
        title: props.title,
        text: props.text,
        comments: props.comments
    });

    const handleFormSubmit = () => {
        props.handleChangeStorage(param => {
            const storage = [...param];
            const indexOfArticle = storage.indexOf(storage.find(obj => obj.id === props.id));
            storage[indexOfArticle] = inputValues;
            return storage;
        });

        props.toggleViewEditForm();
    }

    const handleChangeInput = event => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
    }

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    }

    return (
        <div
            className="main__adding-form-shadow"
            onClick={ props.toggleViewEditForm }
        >
            <div className="main__adding-form-wrapper">
                <span
                    className="main__close-adding-form"
                    onClick={ props.toggleViewEditForm }
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
                            value={ inputValues.title }
                        />
                    </Form.Item>
                    <Form.Item label="Text:" { ...formItemLayout }>
                        <TextArea
                            placeholder="Article"
                            autoSize={{ minRows: 3 }}
                            name="text"
                            onChange={ handleChangeInput }
                            value={ inputValues.text }
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

export default EditArticle;