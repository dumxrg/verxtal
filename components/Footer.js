import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Verxtal. All rights reserved. Built with Next.js</p>
          <p>Sharing insights and stories that matter.</p>
        </div>
      </div>
    </footer>
  );
}