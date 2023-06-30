import React from 'react';
import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  Navigation,
  LocaleSwitcher,
  DirectionSwitcher,
} from 'modules/_shared/components';
import logo from 'assets/images/logo.png';
import { useLayoutStyles } from 'modules/_shared/layout/use-layout-styles';

const { Header, Content, Sider } = Layout;

const AppLayout = () => {
  const { sider, header, content, img, layout } = useLayoutStyles();

  return (
    <Layout style={layout}>
      <Sider
        theme='light'
        width={220}
        style={sider}
        breakpoint='lg'
        collapsedWidth='0'
      >
        <img style={img} src={logo} alt='Comfort booking' />
        <Navigation />
      </Sider>
      <Layout>
        <Header style={header}>
          <Space>
            <LocaleSwitcher />
            <DirectionSwitcher />
          </Space>
        </Header>
        <Content style={content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
