import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around my-6 md:my-10">
        <ul className="flex space-x-8 md:space-x-10">
          <Link href="/">
            <li className="md:text-xl font-bold hover:text-black text-gray-600 focus:text-black">Home</li>
          </Link>
          <Link href="/about">
            <li className="md:text-xl font-bold hover:text-black text-gray-600 focus:text-black">About</li>
          </Link>
          <Link href="/blog">
            <li className="md:text-xl font-bold hover:text-black text-gray-600 focus:text-black">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="md:text-xl font-bold hover:text-black text-gray-600 focus:text-black">Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
