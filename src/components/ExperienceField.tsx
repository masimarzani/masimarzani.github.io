import React from "react";

const ExperienceData = [
  {
    title: "Product Designer",
    position: "Company",
    start: "Jan 2020",
    end: "Jan 2023",
  },
  {
    title: "Lead UX/UI Designer",
    position: "Company",
    start: "Jan 2018",
    end: "Jan 2020",
  },
  {
    title: "Senior Product Designer",
    position: "Company",
    start: "Jun 2016",
    end: "Present",
  },
  {
    title: "Co-Founder",
    position: "Company",
    start: "Jan 2011",
    end: "Jun 2015",
  },
];

export default function ExperienceField() {
  return (
    <div className="container flex flex-col gap-5 mx-auto px-4 py-8">
      <div className="w-full mb-8">
        <h3 className="text-start text-3xl sm:text-4xl font-light head-typography">
          Experience
        </h3>
      </div>
      <div className="space-y-6">
        {ExperienceData.map((experience, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 last:border-b-0`}
          >
            <div className="w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
              <h3 className="text-lg sm:text-3xl font-normal text-[#7c7c7ae0]">
                {experience.title}
              </h3>
            </div>
            <div className="w-full sm:w-auto flex flex-col text-sm sm:text-md text-center sm:text-left text-[#7c7c7ab2] gap-2">
              <p className="text-center sm:text-right text-3xl text-[#7c7c7ae0]">
                {experience.position}
              </p>
              {experience.start} - {experience.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
