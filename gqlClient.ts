import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_FAUNA_DOMAIN,
});

//set authorization headers
const authLink = setContext((_, {headers}) => {
	const faunaKey = process.env.NEXT_PUBLIC_FAUNA_KEY;

	return {
		headers: {
			...headers,
			authorization: `Bearer ${faunaKey}`,
		}
	}
})

//exprt new apolo client. use authheaders
export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

