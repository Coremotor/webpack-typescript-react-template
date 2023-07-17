import { theme } from 'modules/_shared/ui';
import { getDirection } from 'modules/_shared/store/global/selectors';
import { CSSProperties } from 'react';
import { useAppSelector } from 'modules/_shared/store/hooks';

export const useLayoutStyles = () => {
  const {
    token: { colorBgContainer, colorSplit },
  } = theme.useToken();

  const direction = useAppSelector(getDirection);

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
    display: 'flex',
    background: colorBgContainer,
    borderBottom: `1px solid ${colorSplit}`,
    padding: '0 20px',
  };

  const content: CSSProperties = {
    background: colorBgContainer,
    overflow: 'auto',
  };

  const img: CSSProperties = {
    width: 150,
    padding: 20,
  };

  const layout: CSSProperties = {
    height: '100vh',
  };

  return { sider, header, content, img, layout };
};
