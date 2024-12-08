"use client";
import { useState } from "react";
import Link from "next/link";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="shadow-xl bg-blueKind text-xl flex justify-between items-center p-4">
      <div className="text-white text-2xl font-bold italic font-serif">
        BzEy
      </div>
      <ul className="hidden md:flex space-x-8 mr-4 p-2">
        <Link
          href="/"
          className={`relative text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1 items-center
          }`}
          style={{ paddingBottom: "5px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
          </svg>
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 transition-transform duration-300 ease-out origin-center hover:scale-x-100"></span>
        </Link>

        <Link
          href="/about"
          style={{ paddingBottom: "5px" }}
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
          </svg>
          About
        </Link>
        <Link
          style={{ paddingBottom: "5px" }}
          href="/projects"
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M20 3H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 15V5h16l.001 10H4z"></path>
            <path d="m10 13 5-3-5-3z"></path>
          </svg>
          Projects
        </Link>
        <Link
          style={{ paddingBottom: "5px" }}
          href="/resume"
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
            <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
          </svg>
          Resume
        </Link>
        <Link
          style={{ paddingBottom: "5px" }}
          href="/contact"
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"></path>
          </svg>
          Contact
        </Link>
      </ul>
      <div className="md:hidden flex items-center">
        {!isOpen && (
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white hover:text-gray-100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        )}
        {isOpen && (
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white hover:text-gray-100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } text-primaryDark gap-9`}
      >
        <Link
          href="/"
          className={`relative text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1 items-center
          }`}
          style={{ paddingBottom: "5px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
          </svg>
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 transition-transform duration-300 ease-out origin-center hover:scale-x-100"></span>
        </Link>
        <Link
          href="/about"
          style={{ paddingBottom: "5px" }}
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
          </svg>
          About
        </Link>
        <Link
          style={{ paddingBottom: "5px" }}
          href="/projects"
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M20 3H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 15V5h16l.001 10H4z"></path>
            <path d="m10 13 5-3-5-3z"></path>
          </svg>
          Projects
        </Link>
        <Link
          style={{ paddingBottom: "5px" }}
          href="/resume"
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
            <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
          </svg>
          Resume
        </Link>
        <Link
          style={{ paddingBottom: "5px" }}
          href="/contact"
          className="text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 cursor-pointer flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white fill-current"
          >
            <path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"></path>
          </svg>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
