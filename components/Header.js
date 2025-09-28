import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/">
          <div className="logo">Verxtal</div>
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}