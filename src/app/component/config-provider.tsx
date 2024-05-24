import { ConfigProvider } from 'antd';
import React from 'react';

import config from '../../../config-theme.json';

const ConfigTheme: React.FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider theme={config}>{children}</ConfigProvider>
);

export default ConfigTheme;
