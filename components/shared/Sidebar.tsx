"use  client";

import Link from "next/link";
import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { navLinks } from "@/constants/indext";
import path from "path";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo ">
          <h1 className="font-extrabold text-2xl text-green-700"> IMGGENIE</h1>
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                console.log(link.label, pathname);
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_elements group ${
                      isActive ? "bg-green-700 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={20}
                        height={20}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                console.log(link.label, pathname);
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_elements group ${
                      isActive ? "bg-green-700 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={20}
                        height={20}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex cursor-pointer gap-2 p-4">
                <UserButton showName={true} />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-green-700 bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
