"use client";
import {
  FaFacebook,
  FaTripadvisor,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center text-black bg-brandColor h-[50px] ">
      <p className="text-black text-sm mx-5">
        © 2024 Sachi. All rights reserved.
      </p>
      <ul className="flex gap-2 max-lg:hidden">
        <li>
          <Link href={""}>
            <p className="text-sm hover:underline-offset-8 hover:underline">
              HELIOPOLIS
            </p>
          </Link>
        </li>
        <li>&#x2022;</li>
        <li>
          <Link href={""}>
            <p className="text-sm hover:underline-offset-8 hover:underline">
              PARK ST
            </p>
          </Link>
        </li>
        <li>&#x2022;</li>
        <li>
          <Link href={""}>
            <p className="text-sm hover:underline-offset-8 hover:underline">
              ALMAZA
            </p>
          </Link>
        </li>
        <li>&#x2022;</li>
        <li>
          <Link href={""}>
            <p className="text-sm hover:underline-offset-8 hover:underline">
              MARASSI
            </p>
          </Link>
        </li>
      </ul>
      <ul className="flex gap-5 px-5 justify-center">
        <li>
          <Link href={""}>
            <FaFacebook className=" size-7" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <FaInstagram className=" size-7" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <FaTripadvisor className=" size-7" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <FaTiktok className=" size-7" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
