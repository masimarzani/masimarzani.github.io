import React from "react";

const SkillsValues = [
  "Back-End Development",
  "UX Design",
  "UI Design",
  "Product Design",
  "Front-End Development",
  "User Testing",
  "Usability Testing",
  "Leadership",
];

export default function SkillsField() {
  return (
    <div className="flex flex-col items-center my-10 gap-5 mx-2 sm:px-0">
      <div className="w-full">
        <h3 className="text-start text-3xl sm:text-4xl head-typography">Skills</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start items-start px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16 rounded-2xl w-full md:w-[1000px] max-h-max gap-2 sm:gap-3 bg-[#D1EAFA]">
        {SkillsValues.map((skill, index) => (
          <span
            key={index}
            className="p-2 sm:p-3 rounded-xl text-white bg-[#3F6C88] font-medium text-sm sm:text-base"
          >
            {skill}
          </span>
        ))}
        <span className="ml-1 p-2 sm:p-3 text-[#7D8B95] font-light text-sm sm:text-base md:text-lg">
          + More
        </span>
      </div>
    </div>
  );
}
