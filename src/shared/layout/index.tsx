import React from 'react';
import { Layout, theme, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/navigation';
import logo from 'assets/images/logo.png';
import styles from './layout.module.css';
import ThemeSwitcher from 'components/themeSwitcher';
import LocaleSwitcher from 'components/localeSwitcher';
import DirectionSwitcher from 'components/directionSwitcher';
const { Header, Content, Sider } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer, colorSplit },
  } = theme.useToken();

  return (
    <Layout className={styles.layout}>
      <Sider
        width={220}
        style={{
          background: colorBgContainer,
          borderRight: `1px solid ${colorSplit}`,
        }}
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
          <Space>
            <ThemeSwitcher />
            <LocaleSwitcher />
            <DirectionSwitcher />
          </Space>
        </Header>
        <Content style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
