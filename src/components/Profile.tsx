import { Code } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 sm:mt-10">
      <div className="relative">
        <Image
          className="rounded-full"
          src="/images/man.avif"
          width={80}
          height={80}
          alt="profile"
          sizes="(max-width: 640px) 80px, 100px"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 sm:-bottom-8">
          <div className="px-3 py-2 sm:px-4 sm:py-2.5 bg-white border-2 rounded-xl shadow-sm">
            <h2 className="flex items-center flex-row gap-1 sm:gap-2 text-xs sm:text-sm font-medium whitespace-nowrap">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              Masoumeh Marzani
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}