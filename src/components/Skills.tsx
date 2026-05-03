import "./Skills.css";

const Skills = () => {
  return (
    <section className="section skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        <div className="skills-card">
          <h3>Languages</h3>
          <p>JavaScript • TypeScript • Python • SQL</p>
        </div>

        <div className="skills-card">
          <h3>Frameworks</h3>
          <p>Ruby on Rails • React</p>
        </div>

        <div className="skills-card">
          <h3>Tools</h3>
          <p>Docker • Git • Linux • VS Code</p>
        </div>

        <div className="skills-card">
          <h3>Database</h3>
          <p>PostgreSQL • MySQL • SQLite</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;