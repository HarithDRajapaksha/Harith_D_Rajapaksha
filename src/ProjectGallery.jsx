import React, { useState } from "react";

// You can expand this with more fields as needed!
const projects = [
  {
    title: "Let'sGrow Project",
    description: "A platform for Investors and Startups to connect, share ideas, and collaborate.",
    link: "#",
    image: "p1.png",
    languages: ["React", "CSS", "JavaScript", "Node.js", "Express", "SQL", "PhpMyAdmin"],
    status: "Unpublished",
    date: "2025-04-20",
    repo: "https://github.com/HarithDRajapaksha/3rd-year-project-Let-sGrow",
    tags: ["startup", "investor", "fullstack"],
    details: "I developed this platform for shere business ideas, connect with investors, and showcase startups.Startups can create profiles, post ideas, and interact with investors.Investors can browse startups, view profiles, and engage with them.Also includes a blog section for sharing insights and updates.",
    professionalDetails: "This was my 3rd year project at university, focusing on full-stack development with React for the frontend and Node.js for the backend. It features a modern design with glassmorphism and animations to enhance user experience."
  },
  {
    title: "Print Shop Project",
    description: "A full-stack e-commerce platform for a print shop, handling printing and photocopy services.",
    link: "#",
    image: "p2.png",
    languages: ["React", "CSS", "JavaScript", "Node.js", "Express", "SQL", "PhpMyAdmin"],
    status: "Unpublished",
    date: "2024-11-05",
    repo: "https://github.com/HarithDRajapaksha/PrintShopWeb",
    tags: ["e-commerce", "fullstack", "printshop"],
    details: "A full-stack e-commerce platform for a print shop, handling printing and photocopy services. Users can upload files, select print options, and place orders. Admins can manage orders. Supports user authentication, order tracking. Users can see their order history and manage their profiles.",
    professionalDetails: "This project was developed as a full-stack application using React for the frontend and Node.js for the backend. It includes features like order management. The platform is designed to handle various printing services, making it suitable for both personal and business use."
  },
  {
    title: "Entrance Management roject",
    description: "A platform that manaages vehicle parkinglot.",
    link: "#",
    image: "p3.png",
    languages: ["React", "CSS", "JavaScript", "Node.js", "Express", "SQL", "PhpMyAdmin"],
    status: "Unpublished",
    date: "2024-02-15",
    repo: "https://github.com/HarithDRajapaksha/unisite",
    tags: ["parking", "management", "fullstack"],
    details: "A platform that manages vehicle parking lots. Users can view available slots, book spaces. Admins can oversee all bookings and manage parking lot details.",
    professionalDetails: "This project was developed as a full-stack application using React for the frontend and Node.js for the backend. It includes features like real-time slot availability, booking management, and admin controls. The platform is designed to streamline parking lot operations and enhance user experience."
  },
  {
    title: "Reg-Log Form",
    description: "A sample registration and loging page.",
    link: "#",
    image: "p4.png",
    languages: ["React", "CSS", "JavaScript", "Node.js", "Express", "SQL", "PhpMyAdmin"],
    status: "Unpublished",
    date: "2023-10-10",
    repo: "https://github.com/HarithDRajapaksha/reglog",
    tags: ["registration", "login", "form"],
    details: "A simple registration and login form built with React. It includes basic validation and state management.",
    professionalDetails: "This project was created to demonstrate basic form handling in React. It includes features like user registration, login, and form validation. The design is simple and user-friendly, making it easy for users to register and log in."
  }
];

function ProjectGallery() {
  const [selected, setSelected] = useState(null);

  const handleViewProject = (project) => {
    setSelected(project);
  };

  const closeModal = () => setSelected(null);

  return (
    <>
      <div className="gallery">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className="view-project-btn"
                type="button"
                onClick={() => handleViewProject(project)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close details"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="modal-img"
            />
            <h2>{selected.title}</h2>
            <p><b>Description:</b> {selected.details}</p>
            <p><b>Languages/Tech:</b> {selected.languages.join(", ")}</p>
            <p><b>Status:</b> {selected.status}</p>
            <p><b>Tags:</b> {selected.tags.join(", ")}</p>
            <p><b>Date:</b> {selected.date}</p>
            <p><b>Professional Details:</b> {selected.professionalDetails}</p>
            <p>
              <b>Repository:</b> <a href={selected.repo} target="_blank" rel="noopener noreferrer">{selected.repo}</a>
            </p>
            {selected.status === "Published" && (
              <div style={{ marginTop: "1rem" }}>
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-demo-btn"
                >
                  Live Demo
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectGallery;