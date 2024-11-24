"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-purple-500 p-4 flex items-center justify-between">
      <div className="text-lg font-bold">Minha Empresa</div>
      {/* hambburguer*/}
      <button
        className="md:hidden block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-2xl">&#9776;</span>
      </button>
      {/* links */}
      <ul
        className={`flex-col md:flex-row md:flex md:space-x-4 absolute md:static top-16 left-0 w-full bg-black md:bg-transparent md:w-auto transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="p-2 md:p-0">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="p-2 md:p-0">
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
        </li>
        <li className="p-2 md:p-0">
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
