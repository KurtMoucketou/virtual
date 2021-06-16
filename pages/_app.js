import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import Layout from "../containers/Layout";
import "../public/styles/import/general.css";
import "../public/styles/import/general1.css";
import "../public/styles/import/general2.css";
import "../public/styles/import/general3.css";
import "../public/styles/import/general4.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
