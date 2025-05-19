// components/Experience.jsx
import React from "react";

const experiences = [
  {
    role: "Associate Engineer",
    company: "Gain Insights Solutions",
    duration: "Sep 2023 – Present",
    location: "Chennai, Tamil Nadu",
    contributions: [
      "Developed and maintained responsive web apps using React.js.",
      "Improved user experience and system performance.",
      "Created reusable components, increasing dev speed by 30%.",
      "Integrated third-party APIs for enhanced functionality.",
      "Worked closely with UI/UX and backend teams."
    ],
  },
  {
    role: "Intern",
    company: "Gain Insights Solutions",
    duration: "Feb 2023 – Aug 2023",
    location: "Chennai, Tamil Nadu",
    contributions: [
      "Built scalable UI components in React.js.",
      "Integrated Qlik Embed for dynamic dashboards.",
      "Used Qlik, Power BI, ThoughtSpot for BI insights.",
      "Participated in code reviews and performance optimization.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-5">Experience</h2>
        <div className="space-y-5">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-cyan-300">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-400 mt-2 md:mt-0 text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
                {exp.contributions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
