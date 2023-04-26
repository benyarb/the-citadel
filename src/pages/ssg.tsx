import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Character } from "../interfaces";
import CardGrid from "@/components/CardGrid";
import { getCharacters } from "@/queries";

export default function SSG({ characters }: { characters: Character[] }) {
  return (
    <>
      <section className="page-info">
        <h2>SSG</h2>
        <p>
          Static Site Generator - Generate page at build time and serve static
          HTML
        </p>
      </section>

      <CardGrid characters={characters} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getCharacters,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}
