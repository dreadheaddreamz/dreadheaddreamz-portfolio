import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-card">
        <h3>Sagiliti</h3>
        <p className="experience-role">Software Engineer</p>
        <p className="experience-date">2025 – 2026</p>

        <ul>
          <li>
            Built and improved backend features in a Ruby on Rails application
            supporting complex billing and usage workflows
          </li>
          <li>
            Contributed to frontend improvements using React to enhance user
            experience
          </li>
          <li>
            Implemented data validation systems to improve data integrity and
            surface issues
          </li>
          <li>
            Diagnosed and resolved production issues across ETL pipelines and
            database migrations
          </li>
          <li>
            Optimized queries and refactored legacy code to improve performance
            and maintainability
          </li>
          <li>
            Refactored legacy Rails code to improve maintainability and reduce
            technical debt
          </li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Arux Software</h3>
        <p className="experience-role">Software Engineer</p>
        <p className="experience-date">2021 – 2025</p>

        <ul>
          <li>
            Worked across backend systems and frontend features to support
            customer needs
          </li>
          <li>
            Built custom scripts and handled data fixes to resolve real-world
            issues
          </li>
          <li>
            Managed and rebuilt Zendesk as an admin, improving support workflows
          </li>
          <li>
            Collaborated with QA and engineering teams to troubleshoot and
            resolve bugs
          </li>
          <li>
            Delivered small frontend features and bug fixes to improve user
            experience
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
