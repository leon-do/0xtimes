import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <div className="border-b-4 border-black h-16 flex items-center justify-center space-x-16 md:space-x-32">
        <Image src="/img/logo.svg" alt="logo" width={32} height={32} />
        <div className="hover:underline text-xl font-bold	">
          <Link href="/">Home</Link>
        </div>
        <div className="hover:underline text-xl font-bold">
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
