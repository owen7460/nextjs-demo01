import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 border-b border-white/90">
        <nav className="flex justify-between items-center container mx-auto py-4">
          <Link href="/" className="text-2xl font-bold">
            Home
          </Link>
          <div className="space-x-8">
            <Link href="/performance" className="text-lg font-light">
              Performance
            </Link>
            <Link href="/reliability" className="text-lg font-light">
              Reliability
            </Link>
            <Link href="/scale" className="text-lg font-light">
              Scale
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
