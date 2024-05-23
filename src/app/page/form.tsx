import React from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const AnyForm: React.FC = () => (
  <Form
    {...formItemLayout}
    variant="filled"
    style={{ maxWidth: 600 }}>
    <Form.Item
      label="Input"
      name="Input"
      rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="InputNumber"
      name="InputNumber"
      rules={[{ required: true, message: 'Please input!' }]}>
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="TextArea"
      name="TextArea"
      rules={[{ required: true, message: 'Please input!' }]}>
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Select"
      name="Select"
      rules={[{ required: true, message: 'Please input!' }]}>
      <Select />
    </Form.Item>

    <Form.Item
      label="DatePicker"
      name="DatePicker"
      rules={[{ required: true, message: 'Please input!' }]}>
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item wrapperCol={{ xs: { span: 24 }, sm: { offset: 5 } }}>
      <Button
        type="primary"
        htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default AnyForm;
