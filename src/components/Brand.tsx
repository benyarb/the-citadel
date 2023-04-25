import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href="/" className="flex justify-center items-end gap-2 pb-6">
      <h1 className="text-4xl leading-none text-left">The Citadel</h1>
      <p className="text-sm">with</p>

      <Image
        className="relative pb-1 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={150}
        height={31}
        priority
      />
    </Link>
  );
}
