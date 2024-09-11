"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div className="flex flex-row justify-between items-center py-4">
        <div className="w-10 sm:w-10">
          <Image width={150} height={100} src="/images/logo.avif" alt="logo" />
        </div>
        <div className="hidden md:flex flex-row items-center gap-6 lg:gap-10">
          <Link
            href=""
            className="font-satoshi text-[#434343] text-sm lg:text-base"
          >
            Work
          </Link>
          <Link
            href=""
            className="font-satoshi text-[#434343] text-sm lg:text-base"
          >
            Experience
          </Link>
          <Link
            href=""
            className="font-satoshi text-[#434343] text-sm lg:text-base"
          >
            FAQs
          </Link>
          <Link
            href=""
            className="text-[#434343] flex items-center justify-center"
          >
            <button className="font-satoshi hover:bg-white/50 transition-all py-2 px-3 lg:py-2.5 lg:px-4 text-center rounded-full shadow-md bg-white text-sm lg:text-base font-medium">
              Start a Project
            </button>
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col gap-4">
            <Link href="" className="text-[#434343] text-sm">
              Work
            </Link>
            <Link href="" className="text-[#434343] text-sm">
              Experience
            </Link>
            <Link href="" className="text-[#434343] text-sm">
              FAQs
            </Link>
            <Link href="" className="text-[#434343]">
              <button className="w-full py-2 px-3 text-center rounded-full shadow-md bg-white text-sm font-medium">
                Start a Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
