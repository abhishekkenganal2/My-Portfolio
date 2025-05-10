// components/Projects.jsx
import React from "react";
import "./Projects.css";
import prathibimbaImg from "../assets/prathibimba.png";
import railwayImg from "../assets/railway.png";

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
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
