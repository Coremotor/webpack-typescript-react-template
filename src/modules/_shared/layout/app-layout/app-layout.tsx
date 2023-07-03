import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'modules/_shared/components';
import logo from 'assets/images/logo.png';
import { useLayoutStyles } from 'modules/_shared/layout/app-layout/use-layout-styles';

const { Header, Content, Sider } = Layout;

export const AppLayout = () => {
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
        <Header style={header}>Header</Header>
        <Content style={content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
