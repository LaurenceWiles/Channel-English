import "../styles/Home.css";
import classroomImage from "../assets/classroomImage.png";

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

          <a href="/contact" className="home__cta">
            Get in touch
          </a>
        </div>

        <div className="home__hero-image">
          <img
            src={classroomImage}
            alt="English teaching materials in a classroom setting"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
