import "./Experience.css";

const Experience = () => {
  return (
    <section className="section experience">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Software Engineer</h3>
            <p>Sagiliti</p>
          </div>
          <span>June 2025 – March 2026</span>
        </div>

        <ul>
          <li>Built backend features supporting billing and usage workflows.</li>
          <li>Refactored legacy Rails code to improve maintainability.</li>
          <li>Resolved production issues across ETL pipelines and database migrations.</li>
        </ul>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Software Engineer</h3>
            <p>Arux Software</p>
          </div>
          <span>September 2021 – March 2025</span>
        </div>

        <ul>
          <li>Resolved customer-facing bugs and supported production software issues.</li>
          <li>Built custom Ruby scripts and XML configurations for client requests.</li>
          <li>Managed and rebuilt Zendesk workflows during a company rebrand.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;