'use client';

import { Amplify } from 'aws-amplify';
import config from '../../../src/aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify';

export function Customers({ signOut, user }: WithAuthenticatorProps) {
  console.log('Amplify', Amplify);
  Amplify.configure(config, {
    ssr: true, // required when using Amplify with Next.js
  });
  // Amplify.configure(config);
  console.log('config', config);

  return (
    <div>
      <h1>Customers</h1>
      <>
        {user && <h1>Welcome, {user.username}!</h1>}
        <div>You are logged in using AWS Cognito!</div>
        <button onClick={() => signOut && signOut()}>Sign out</button>
      </>
    </div>
  );
}

export default withAuthenticator(Customers);
