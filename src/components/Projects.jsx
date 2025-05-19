// components/Projects.jsx
import React from "react";
import prathibimbaImg from "../assets/prathibimba.jpg";
import railwayImg from "../assets/railway.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "Prathibimba Platform",
      description:
        "An online test platform that helps students prepare for placements and track performance. Built with React, Node, and Express.",
      image: prathibimbaImg,
      tech: ["React", "Node.js", "Express.js", "LocalStorage"],
    },
    {
      title: "Railway Reservation System",
      description:
        "A mini project simulating railway reservation system using HTML, CSS, JavaScript, and SQL for data management.",
      image: railwayImg,
      tech: ["HTML", "CSS", "JavaScript", "SQL"],
    },
  ];

  return (
    <section className="bg-slate-900 text-slate-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 text-cyan-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
