import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="border-b-4 h-16 flex items-center justify-center space-x-32">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
