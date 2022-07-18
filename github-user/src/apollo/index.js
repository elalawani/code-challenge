import {ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache} from '@apollo/client/core';


// HTTP connection to the API
const httpLink = createHttpLink({
    // URL to github api graphql
    uri: 'https://api.github.com/graphql',
});
const authMiddleware = new ApolloLink((operation, forward) => {
    // token to login in GitHub
    // this is my Token und it Expires on Thu, Aug 11 2022.
    // to make a new Token
    // 1 github setting
    // 2  Developer settings
    // 3 Personal access tokens
    // 4 Generate a new token
    const token = "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"
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : "",
        },
    });
    return forward(operation);
});
export const apolloClient = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),

});