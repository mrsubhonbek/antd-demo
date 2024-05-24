import React, { useState } from 'react';
import {
  Avatar,
  Breadcrumb,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
  Typography,
} from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const items: MenuProps['items'] = [
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [positionContent, setPositionContent] = useState(200);
  return (
    <Layout className="min-h-screen">
      <Sider
        className="!fixed left-0 top-0 bottom-0 z-10 min-h-screen"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
          if (!broken) setPositionContent(200);
        }}
        theme="light"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          if (!collapsed && type !== 'clickTrigger') setPositionContent(200);
          else setPositionContent(0);
        }}>
        <div className="demo-logo-vertical pt-16" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
          items={items2}
        />
      </Sider>
      <Layout style={{ marginLeft: positionContent }}>
        <Header
          className={`p-0 bg-[${colorBgContainer}] flex justify-between items-center`}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
            className="flex-1 min-w-0"
          />
          <Dropdown menu={{ items }}>
            <Space className="bg-white pr-4">
              <Text>Subhonbek</Text>
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
            </Space>
          </Dropdown>
        </Header>
        <Breadcrumb
          className="m-4 mb-0"
          items={[
            {
              path: 'home',
              title: <HomeOutlined />,
            },
            {
              path: 'form',
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: 'Application',
            },
          ]}
        />
        <Content className="mt-6 mx-4">
          <div
            className={`p-6 min-h-full bg-white bg-[${colorBgContainer}] rounded-[${borderRadiusLG}px]`}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
