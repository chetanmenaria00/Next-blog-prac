import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around my-10">
        <ul className="flex space-x-8 md:space-x-10">
          <Link href="/">
            <li className="text-lg font-semibold">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-lg font-semibold">About</li>
          </Link>
          <Link href="/blog">
            <li className="text-lg font-semibold">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="text-lg font-semibold">Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
