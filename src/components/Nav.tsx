import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const links = [
    // { label: "Home", path: "/" },
    { label: "SSG", path: "/ssg" },
    { label: "SSR", path: "/ssr" },
    { label: "CSR", path: "/csr" },
  ];

  const { asPath: currentPath } = useRouter();

  return (
    <nav className="flex justify-center gap-6">
      {links.map((link, i) => (
        <Link
          className={`navlink ${currentPath === link.path ? "active" : ""}`}
          key={i}
          href={link.path}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
