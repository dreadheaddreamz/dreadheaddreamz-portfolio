import "./Hero.css";
import profilePic from "../assets/jb_cruise.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-name">James Batsell</h1>
      <img src={profilePic} alt="James Batsell" className="profile-pic" />

      <h2 className="hero-brand">Dreadheaddreamz</h2>

      <p className="hero-subtext">
        Full-Stack Software Engineer | Web Developer | Tech Enthusiast
      </p>

      <p className="hero-stack">
        Ruby on Rails • React • TypeScript • Docker • AWS • PostgreSQL
      </p>

      <p className="hero-quote">
        "Not here to follow the light... I build my own path."
      </p>
    </section>
  );
};

export default Hero;
