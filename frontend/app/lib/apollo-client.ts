import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },

}

const createClient = () => {
    return new ApolloClient({
        uri: "http://localhost/graphql",
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions,
    });
};

export default createClient;