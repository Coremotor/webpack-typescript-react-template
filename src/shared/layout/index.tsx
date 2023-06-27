import React from 'react';
import { Layout, Typography, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/navigation';
import logo from 'assets/images/logo.png';
import styles from './layout.module.css';
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const AppLayout = () => {
  const {
    token: { colorBgContainer, colorSplit },
  } = theme.useToken();

  return (
    <Layout className={styles.layout}>
      <Sider
        style={{ background: colorBgContainer }}
        breakpoint='lg'
        collapsedWidth='0'
      >
        <img className={styles.img} src={logo} alt='Comfort booking' />
        <Navigation />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            borderBottom: `1px solid ${colorSplit}`,
          }}
        >
          <Text>Header</Text>
        </Header>
        <Content style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
