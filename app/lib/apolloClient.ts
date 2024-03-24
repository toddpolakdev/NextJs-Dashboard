import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: 'https://next-js-dashboard-backend.vercel.app/api/graphql', // Adjust if your GraphQL endpoint differs
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloClient = new ApolloClient<NormalizedCacheObject>({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export function useApollo(): ApolloClient<NormalizedCacheObject> {
  return apolloClient;
}
