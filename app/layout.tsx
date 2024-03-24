import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { ReactNode } from 'react';
import { ApolloWrapper } from './apollo-wrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
