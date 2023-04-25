import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Character } from "../interfaces";

export default function SSG({ characters }: { characters: Character[] }) {
  return (
    <>
      <h2>SSG</h2>
      <p>Static Site Generator</p>

      <div className="grid-cols-2">
        {characters.map((character) => (
          <div key={character.id} className="card">
            <p>
              {character.id} - {character.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            id
            image
            name
          }
          info {
            count
            pages
            next
            prev
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results.slice(0, 4),
    },
  };
}
