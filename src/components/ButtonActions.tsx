import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ButtonActions() {
  return (
    <div className="sm:mt-5 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
      <Link href={"https://github.com/masimarzani/"} target="_blank">
        <button className="font-satoshi group flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-3 border rounded-full shadow-sm bg-[#090909] text-white text-sm sm:text-base">
          <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#fae5d2] transition-all group-hover:text-black group-hover:bg-[#fae5d2] group-hover:p-3 group-hover:rounded-full" />
          Open my Github
        </button>
      </Link>
      <button className="font-satoshi hover:bg-white/50 transition-all px-4 py-2 sm:px-4 sm:py-3 border rounded-full shadow-sm text-sm sm:text-base">
        Sell my Projects
      </button>
    </div>
  );
}
