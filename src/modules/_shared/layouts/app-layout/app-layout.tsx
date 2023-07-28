import React, { Suspense } from 'react';
import { Sider, Content, Header, Layout } from 'modules/_shared/ui';
import { Outlet } from 'react-router-dom';
import { Loader, Navigation } from 'modules/_shared/components';
import logo from 'assets/images/logo.png';
import { AppHeader } from 'modules/_shared/components/app-header/app-header';
import styles from './app-layout.module.css';
export const AppLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        theme='light'
        width={250}
        breakpoint='lg'
        collapsedWidth='0'
      >
        <img className={styles.logo} src={logo} alt='Comfort booking' />
        <Navigation />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <AppHeader />
        </Header>
        <Content className={styles.content}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
