"use client";
import React, { useState } from "react";

const FaqsData = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use a variety of tools and software, depending on the project and the needs of the client. Some of the most common tools I use include Figma, Framer, Adobe Creative Suite, and user testing platforms like UserTesting.com, Smartlook, Hotjar and Optimal Workshop.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "The success of UX designs can be measured through various metrics such as user engagement, task completion rates, user satisfaction scores, and conversion rates. I also use qualitative feedback from user testing sessions to gauge the effectiveness of the designs.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full mb-12">
        <h3 className="text-start text-3xl sm:text-4xl font-light head-typography">
          Frequently asked questions
        </h3>
      </div>
      <div className="space-y-4">
        {FaqsData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-6 max-w-[980px] last:border-b-0"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 font-satoshi font-medium text-[#7c7c7ae0]">
                {faq.question}
              </h3>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-xl sm:text-2xl font-light leading-8 tracking-wide text-[#7c7c7ae0]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
