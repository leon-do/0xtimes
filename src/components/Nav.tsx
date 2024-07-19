import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <div className="border-b-4 h-16 flex items-center justify-center space-x-32">
        <Image src="/img/logo.svg" alt="logo" width={32} height={32} />
        <div className="hover:underline text-xl">
          <Link href="/">Home</Link>
        </div>
        <div className="hover:underline text-xl">
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
