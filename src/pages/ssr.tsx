import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Character } from "../interfaces";
import CardGrid from "@/components/CardGrid";
import { GET_CHARACTERS } from "@/queries";

export default function SSR({ characters }: { characters: Character[] }) {
  return (
    <>
      <section className="page-info">
        <h2>SSR</h2>
        <p>
          Server-side Rendering - Generate page on the server for each request
        </p>
      </section>

      <CardGrid characters={characters} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_CHARACTERS,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}
