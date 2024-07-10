"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";

export default function NavBar() {
  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
    { name: "MENU", href: "/menu" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ACCOUNT", href: "/login" },
  ];
  const pathname = usePathname();
  return (
    <header className="flex w-full  items-center justify-center pt-3 mx-auto relative bg-gradient-to-b from-black to-transparent">
      <nav className="">
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Sachi Logo"
            width={230}
            height={100}
            className="m-auto"
          />
        </Link>
        <div className="border-t border-t-brandColor m-auto  mt-5 w-fit ">
          <ul className="flex gap-16 max-lg:hidden max mt-4 text-white">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:underline-offset-8 hover:underline ease-in "
              >
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active " : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex items-center justify-end right-10 absolute">
        <button className="relative border max-lg:hidden  border-accentColor rounded px-4 py-3  cursor-pointer text-md text-brandColor font-bold before:bg-white  before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
          Make A Reservation
        </button>
      </div>
      <div className="flex items-center justify-end right-5 absolute">
        <button className="relative border visible lg:hidden bg-black border-accentColor rounded px-4 py-4  cursor-pointer text-md text-brandColor font-bold before:bg-white  before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
          <CgMenu />
        </button>
      </div>
    </header>
  );
}
