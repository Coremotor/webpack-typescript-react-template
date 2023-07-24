import React, { Suspense } from 'react';
import { Sider, Content, Header, Layout } from 'modules/_shared/ui';
import { Outlet } from 'react-router-dom';
import { Loader, Navigation } from 'modules/_shared/components';
import logo from 'assets/images/logo.png';
import { useLayoutStyles } from 'modules/_shared/layouts/app-layout/use-layout-styles';
import { AppHeader } from 'modules/_shared/components/app-header/app-header';

export const AppLayout = () => {
  const { sider, header, content, img, layout } = useLayoutStyles();

  return (
    <Layout style={layout}>
      <Sider
        theme='light'
        width={250}
        style={sider}
        breakpoint='lg'
        collapsedWidth='0'
      >
        <img style={img} src={logo} alt='Comfort booking' />
        <Navigation />
      </Sider>
      <Layout>
        <Header style={header}>
          <AppHeader />
        </Header>
        <Content style={content}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
