import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Character } from "../interfaces";

export default function SSR({ characters }: { characters: Character[] }) {
  return (
    <>
      <h2>SSR</h2>
      <p>Server-side Rendering</p>

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

export async function getServerSideProps() {
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
