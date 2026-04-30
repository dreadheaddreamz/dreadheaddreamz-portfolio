import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I didn’t start in tech. I started in security, where I learned
          discipline, awareness, and how to stay calm under pressure. But over
          time, I knew I wanted more I wanted to build something of my own and
          create real impact.
        </p>

        <p className="about-text">
          I took a leap into software engineering, went through a bootcamp, and
          committed to figuring it out. Since then, I’ve worked as a full-stack
          engineer, building and improving features across both backend and
          frontend. I’ve spent time working with Ruby on Rails, React, and
          real-world systems where reliability and clean code actually matter.
        </p>

        <p className="about-text">
          I like being able to work end to end from building the logic behind
          the scenes to shaping the user experience. I’m always learning,
          whether that’s leveling up my system design skills, getting deeper
          into cloud, or continuing my path toward cybersecurity.
        </p>

        <p className="about-text">
          I take pride in staying consistent, putting in the work, and growing
          every day no shortcuts.
        </p>
      </div>
    </section>
  );
};

export default About;
