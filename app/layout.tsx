import '@aws-amplify/ui-react/styles.css';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { ReactNode } from 'react';
import { ApolloWrapper } from './apollo-wrapper';

import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ConfigureAmplifyClientSide />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
