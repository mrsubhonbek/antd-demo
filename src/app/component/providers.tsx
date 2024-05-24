import React from 'react';

import ConfigTheme from './config-provider';
import RootLayout from './root-layout';

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <ConfigTheme>
    <RootLayout>{children}</RootLayout>
  </ConfigTheme>
);

export default Providers;
