import { Col, Row } from 'antd';
import AnyForm from './app/page/form';
import RootLayout from './app/component/root-layout';

function App() {
  return (
    <RootLayout>
      <Row justify="center">
        <Col
          xs={24}
          sm={20}
          md={16}
          lg={12}
          xl={8}>
          <AnyForm />
        </Col>
      </Row>
    </RootLayout>
  );
}

export default App;
