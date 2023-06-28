import React from 'react';
import { Layout, theme, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/navigation';
import logo from 'assets/images/logo.png';
import styles from './layout.module.css';
import ThemeSwitcher from 'components/themeSwitcher';
import LocaleSwitcher from 'components/localeSwitcher';
import DirectionSwitcher from 'components/directionSwitcher';
import { useSelector } from 'react-redux';
import { getDirection } from 'store/modules/app/selectors';
const { Header, Content, Sider } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer, colorSplit },
  } = theme.useToken();

  const direction = useSelector(getDirection);

  return (
    <Layout className={styles.layout}>
      <Sider
        width={220}
        style={
          direction === 'ltr'
            ? {
                background: colorBgContainer,
                borderRight: `1px solid ${colorSplit}`,
              }
            : {
                background: colorBgContainer,
                borderLeft: `1px solid ${colorSplit}`,
              }
        }
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
            padding: '0 20px',
          }}
        >
          <Space>
            <ThemeSwitcher />
            <LocaleSwitcher />
            <DirectionSwitcher />
          </Space>
        </Header>
        <Content
          style={{ background: colorBgContainer }}
          className={styles.content}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
