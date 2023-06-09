import Image from "next/image";
import { Character } from "../interfaces";

export default function CardGrid({ characters }: { characters: Character[] }) {
  return (
    <div className="card-grid">
      {characters.map((character) => (
        <div
          key={character.id}
          className="w-64 mx-auto border overflow-hidden border-white rounded-lg shadow-xl"
        >
          <Image
            src={character.image}
            alt={character.name}
            width={256}
            height={256}
          />
          <p className="p-4 text-center">
            <strong className="block">{character.name}</strong>
            <em>Status: {character.status}</em>
          </p>
        </div>
      ))}
    </div>
  );
}
