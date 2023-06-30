import { theme } from 'antd';
import { useSelector } from 'react-redux';
import { getDirection } from 'modules/_shared/app/store/app/selectors';
import { CSSProperties } from 'react';

export const useLayoutStyles = () => {
  const {
    token: { colorBgContainer, colorSplit },
  } = theme.useToken();

  const direction = useSelector(getDirection);

  const sider: CSSProperties =
    direction === 'ltr'
      ? {
          background: colorBgContainer,
          borderRight: `1px solid ${colorSplit}`,
        }
      : {
          background: colorBgContainer,
          borderLeft: `1px solid ${colorSplit}`,
        };

  const header: CSSProperties = {
    background: colorBgContainer,
    borderBottom: `1px solid ${colorSplit}`,
    padding: '0 20px',
  };

  const content: CSSProperties = {
    background: colorBgContainer,
    overflow: 'auto',
    padding: 20,
  };

  const img: CSSProperties = {
    padding: 20,
  };

  const layout: CSSProperties = {
    height: '100vh',
  };

  return { sider, header, content, img, layout };
};
