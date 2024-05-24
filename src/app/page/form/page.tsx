import { Col, Row } from 'antd';
import AnyForm from './component/form';
import TableExample from './component/table';

const PageForm: React.FC = () => {
  return (
    <>
      <Row justify="center">
        <Col span={24}>
          <AnyForm />
        </Col>
      </Row>
      <Row className="max-w-6xl">
        <Col>
          <TableExample />
        </Col>
      </Row>
    </>
  );
};

export default PageForm;
