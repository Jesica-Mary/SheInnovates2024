import { useState } from "react";
import PropTypes from "prop-types";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" rounded-lg mb-4" id="faq">
      <button
        className="w-full text-left py-2 px-4   text-white hover:bg-purple-950 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4  w-full">
          <p className="text-gray-400 w-4/5  text-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const pregnancyFAQ = [
    {
      question: "What are the recommended screenings for women's health?",
      answer:
        "Recommended screenings for women's health include mammograms for breast cancer, Pap smears for cervical cancer, and bone density scans for osteoporosis.",
    },
    {
      question: "What are some strategies for achieving work-life balance?",
      answer:
        "Strategies for achieving work-life balance include setting boundaries, prioritizing tasks, and scheduling regular breaks for self-care and relaxation.",
    },
    {
      question: "What are some tips for maintaining healthy relationships?",
      answer:
        "Tips for maintaining healthy relationships include effective communication, mutual respect, and prioritizing quality time together.",
    },
    {
      question: "How can women prioritize their mental health and well-being?",
      answer:
        "Women can prioritize their mental health and well-being by practicing self-care, seeking support from friends and professionals, and setting boundaries to manage stress effectively.",
    },
    {
      question: "What are some strategies for balancing parenting responsibilities with career aspirations?",
      answer:
        "Strategies for balancing parenting responsibilities with career aspirations include setting realistic expectations, delegating tasks, and establishing flexible work arrangements when possible.",
    },
  ];

  return (
    <div className="my-10 mt-32 flex flex-col w-full">
      <h2 className="px-32 text-5xl  font-bold text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="px-40 text-lg">
        {pregnancyFAQ.map(({ question, answer }) => {
          return (
            <FaqItem
              key={question + answer}
              question={question}
              answer={answer}
            />
          );
        })}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQ;
