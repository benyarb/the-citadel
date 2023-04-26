import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import ClientWrapper from "../components/ClientWrapper";
import ClientCharacters from "../components/ClientCharacters";

export default function CSR() {
  return (
    <ApolloProvider client={client}>
      <section className="page-info">
        <h2>CSR</h2>
        <p>
          Client-side Rendering - Page sent to browser to request data from API
        </p>
      </section>

      <ClientWrapper>
        <ClientCharacters />
      </ClientWrapper>
    </ApolloProvider>
  );
}
