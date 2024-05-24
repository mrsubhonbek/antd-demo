import React from 'react';

import ConfigTheme from './config-provider';
import RootLayout from './root-layout';

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <RootLayout>
    <ConfigTheme>{children}</ConfigTheme>
  </RootLayout>
);

export default Providers;
