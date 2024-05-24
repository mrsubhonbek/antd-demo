import { Col, Row } from "antd";
import AnyForm from "./component/form";

const PageForm: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <AnyForm />
      </Col>
    </Row>
  );
};

export default PageForm;
