import Nav from "./Nav";
import Brand from "./Brand";

export default function Header() {
  return (
    <header className="text-center">
      <Brand />
      <Nav />
    </header>
  );
}
