import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

type Props = {
  children?: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [positionContent, setPositionContent] = useState(0);
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
        breakpoint="lg"
        defaultCollapsed
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
          setPositionContent(200);
        }}
        theme="light"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          if (!collapsed && type !== 'clickTrigger') setPositionContent(200);
          else setPositionContent(0);
        }}>
        <div className="demo-logo-vertical" />
        <Menu
          style={{ height: '100%' }}
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
        <div />
      </Sider>
      <Layout style={{ marginLeft: positionContent }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
