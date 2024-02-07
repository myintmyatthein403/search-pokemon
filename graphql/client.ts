import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'YOUR_GRAPHQL_ENDPOINT_URL',
    cache: new InMemoryCache(),
});

export default client;
