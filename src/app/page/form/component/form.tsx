/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { FormProps } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 24 },
  },
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const AnyForm: React.FC = () => (
  <Form
    {...formItemLayout}
    onFinish={onFinish}
    className="max-w-6xl"
    onFinishFailed={onFinishFailed}>
    <Row gutter={[10, 0]}>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="Checkbox"
          name="checkbox"
          valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
      </Col>

      <Col
        xs={24}
        md={12}>
        <Form.Item
          name="radio"
          label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="Input"
          name="input">
          <Input />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="Select"
          name="select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="TreeSelect"
          name="treeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [{ title: 'Bamboo', value: 'bamboo' }],
              },
            ]}
          />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="Cascader"
          name="cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="DatePicker"
          name="datePicker">
          <DatePicker />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="RangePicker"
          name="rangePicker">
          <RangePicker />
        </Form.Item>
      </Col>

      <Col
        xs={24}
        md={12}>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}>
          <Upload
            action="/upload.do"
            listType="picture-card">
            <button
              style={{ border: 0, background: 'none' }}
              type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="TextArea"
          name="textArea">
          <TextArea rows={4} />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="InputNumber"
          name="number">
          <InputNumber />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="Switch"
          name="switch"
          valuePropName="checked">
          <Switch />
        </Form.Item>
      </Col>

      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="Slider"
          name="slider">
          <Slider />
        </Form.Item>
      </Col>
      <Col
        xs={24}
        md={12}>
        <Form.Item
          label="ColorPicker"
          name="colorPicker">
          <ColorPicker />
        </Form.Item>
      </Col>

    </Row>
    <Row justify="end">
      <Col>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

export default AnyForm;
