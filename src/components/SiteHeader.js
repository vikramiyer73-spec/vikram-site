import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1100px] items-baseline justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] transition-colors duration-150 hover:text-connection"
        >
          Vikram Iyer
        </Link>

        <nav className="flex items-baseline gap-6">
          <Link
            href="/#work"
            className="label transition-colors duration-150 hover:text-connection"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="label transition-colors duration-150 hover:text-connection"
          >
            About
          </Link>
          <a
            href="mailto:vikramiyer73@gmail.com"
            className="label transition-colors duration-150 hover:text-connection"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}