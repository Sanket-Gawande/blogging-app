import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-filter backdrop-blur-sm text-gray-300 mx-auto max-w-7xl py-2 h-12 z-10">
      <div className="flex items-center justify-between px-4">
        <div className="flex-shrink-0">
          <Link href={"/"} className="text-2xl font-bold">
            AuthorsLog<span className="text-xs">.com</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-50">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-50">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-50">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
