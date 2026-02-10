import { Link } from "react-router-dom";
import "../styles/Home.css";
import classroomImage2 from "../assets/classroomImage2.png";

const Home = () => {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <h1>High-quality English teaching resources</h1>

          <p>
            Research-based, ready-to-use materials designed to support English
            teachers and schools in delivering clear, effective lessons.
          </p>

          <div className="home__cta-row">
            <Link to="/about" className="home__cta">
              Learn more
            </Link>
            <Link to="/contact" className="home__cta-secondary">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="home__hero-image-wrapper">
          <img
            src={classroomImage2}
            alt="English teaching materials in a classroom setting"
            className="home__hero-image"
            width="1536"
            height="1024"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
