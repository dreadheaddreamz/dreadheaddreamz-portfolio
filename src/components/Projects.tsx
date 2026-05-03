import "./Projects.css";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  plans?: string[];
  bullets: string[];
  github: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "PhantomTrace",
    subtitle: "Real-time Log Monitoring Dashboard (WIP)",
    description:
      "A React and TypeScript dashboard that simulates live system logs with severity filtering, search functionality, and modular components.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    plans: [
      "Backend integration",
      "Real-time data streaming",
      "Dashboard analytics",
    ],
    bullets: [
      "Built live log simulation using React state and useEffect",
      "Added filtering by log severity: error, warn, and info",
      "Implemented search by message and source",
      "Organized UI into reusable components (LogFilter, LogList, LogCard)",
      "Centralized TypeScript types for scalability",
    ],
    github: "https://github.com/dreadheaddreamz/log-monitor-react",
    status: "WIP",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="skills-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>

            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-tech">{project.tech.join(" · ")}</p>

            <p className="project-description">{project.description}</p>

            <ul className="project-bullets">
              {project.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            {project.plans && (
              <div className="project-plans">
                <h4>Planned Enhancements</h4>
                <ul>
                  {project.plans.map((plan, index) => (
                    <li key={index}>{plan}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>

              {project.status && (
                <span className="project-status">{project.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
