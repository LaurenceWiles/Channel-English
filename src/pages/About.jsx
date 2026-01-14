import "../styles/About.css";
import marieImage from "../assets/marieImage.jpg";
import materialsImage from "../assets/materialsImage.png";

const About = () => {
  return (
    <main className="about">
      <section className="about__intro">
        <div className="about__image-wrapper">
          <img
            src={marieImage}
            alt="Marie, creator of English Channel Education"
            className="about__image"
          />
        </div>

        <div className="about__content">
          <h1>About Marie</h1>

          <p>
            Hi, I’m Marie — the creator of{" "}
            <strong>English Channel Education</strong>.
          </p>

          <p>
            I support English teachers and schools with practical, bespoke,
            research-based teaching materials designed to make high-quality
            English language teaching clearer, easier, and more effective.
          </p>

          <p>
            As a published researcher in phonology with extensive experience in
            English language education, I create ready-to-use resources —
            including PDF and PowerPoint combinations — that help teachers
            confidently teach key language areas such as pronunciation, grammar,
            and language skills.
          </p>
        </div>
      </section>

      <section className="about__materials">
        <div className="about__materials-content">
          <h2>Classroom-ready materials</h2>

          <p>
            My work is grounded in real classroom needs. Each resource is
            carefully structured to save teachers time while maintaining
            clarity, accuracy, and simplicity for learners.
          </p>

          <p>
            Through English Channel Education, my goal is to support educators
            with materials they can trust — resources that are pedagogically
            sound, visually clear, and easy to adapt.
          </p>
        </div>

        <div className="about__materials-image-wrapper">
          <img
            src={materialsImage}
            alt="Example of English Channel Education teaching materials"
            className="about__materials-image"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
