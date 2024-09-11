import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Cards {
  Title: string;
  SubTitle: string;
  Image: string;
  OptionOne: string;
  OptionTwo: string;
  ButtonText: string;
  ButtonLink: string;
  BgColor: string;
}

export default function ProjectCards({
  Title,
  SubTitle,
  Image: image,
  OptionOne,
  OptionTwo,
  ButtonText,
  ButtonLink,
  BgColor,
}: Cards) {
  return (
    <div className="my-5 mx-2 md:mx-0 flex flex-col items-center">
      <div
        className="px-6 py-10 md:px-10 md:py-16 rounded-2xl w-full md:w-[1000px] h-auto md:h-[500px]"
        style={{ backgroundColor: BgColor || "#e0f1d6" }}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 flex flex-col justify-between gap-2 mb-6 md:mb-0">
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="text-2xl md:text-3xl">{Title}</h4>
              <span className="text-black/40 text-lg md:text-xl font-light">
                {SubTitle}
              </span>
            </div>
            <div>
              <Link href={ButtonLink || "/"}>
                <button className="px-4 py-2 md:px-5 md:py-3 bg-[#261A1A] rounded-full font-medium text-white">
                  {ButtonText}
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-6">
            <Image
              className="rounded-xl sm:min-w-[444px] max-w-[314px] max-h-[1080px]"
              src={image || "/images/main1.avif"}
              width={512}
              height={1080}
              alt=""
            />
            <div className="flex flex-row gap-6">
              <div className="flex w-full md:w-1/2">
                <div className="flex flex-col gap-2 md:gap-4">
                  <p className="text-black/50 text-lg md:text-xl">Engagement</p>
                  <p className="text-4xl md:text-5xl">{OptionOne}</p>
                </div>
              </div>
              <div className="flex w-full md:w-1/2">
                <div className="flex flex-col gap-2 md:gap-4">
                  <p className="text-black/50 text-lg md:text-xl">
                    User Satisfaction
                  </p>
                  <p className="text-4xl md:text-5xl">{OptionTwo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
