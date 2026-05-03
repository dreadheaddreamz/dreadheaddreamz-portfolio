import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-text">
        Open to software engineering opportunities, collaborations, and building
        something real.
      </p>

      <div className="contact-links">
        <a href="mailto:your-email@email.com">Email Me</a>
        <a
          href="https://www.linkedin.com/in/james-batsell-6611aa1ba/"
          target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/dreadheaddreamz" target="_blank">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
