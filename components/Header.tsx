import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-filter backdrop-blur-sm text-gray-300 mx-auto max-w-7xl py-2 h-12 z-10">
      <div className="flex items-center justify-between px-4">
        <div className="flex-shrink-0">
          <Link href={"/"} className="text-xl font-bold">
            Blog
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
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
