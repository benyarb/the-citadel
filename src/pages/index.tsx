import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="mb-6">Hello, multiverse!</h2>

      <p className="mb-6">
        Welcome to <strong>The Citadel</strong> - a project created with Next JS
        and GraphQL to access the{" "}
        <a href="https://rickandmortyapi.com/graphql">Rick and Morty API</a> and
        display a grid of cards.
      </p>

      <p>
        There are 3 variations of data fetching demonstrated: Static Site
        Generator (<Link href="/ssg">SSG</Link>), Server-side Rendering (
        <Link href="/ssr">SSR</Link>), and Client-side Rendering (
        <Link href="/csr">CSR</Link>).
      </p>
    </section>
  );
}
