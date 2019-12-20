import React from 'react';

import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const AddArticle = props => {

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    }

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
                    Закрыть
                </span>
                <Form className="main__adding-form" layout='horizontal'>
                    <h1>Add new article</h1>
                    <Form.Item label="Title:" {...formItemLayout}>
                        <Input placeholder="Article title" />
                    </Form.Item>
                    <Form.Item label="Text:" {...formItemLayout}>
                        <TextArea
                            placeholder="Article"
                            autoSize={{ minRows: 3 }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="normal">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AddArticle;