import { Col, Row, Space } from 'antd';
import AnyForm from './component/form';
import TableExample from './component/table';

const PageForm: React.FC = () => {
  return (
    <Space direction="vertical">
      <Row justify="center">
        <Col span={24}>
          <AnyForm />
        </Col>
      </Row>
      <Row className="max-w-6xl">
        <Col span={24}>
          <TableExample />
        </Col>
      </Row>
    </Space>
  );
};

export default PageForm;
