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
            width="1224"
            height="1406"
          />
        </div>

        <div className="about__content">
          <h1>About me</h1>

          <p>
            Hello, I’m Sinéad, the creator of English Channel Education, a
            service dedicated to supporting English teachers and schools with
            practical, bespoke, and research-informed English language teaching
            materials.
          </p>

          <p>
            As a published researcher in phonology with extensive experience in
            English language education, I design ready-to-use resources that are
            pedagogically sound, visually clear, and easy to adapt. My materials
            typically combine PDFs and PowerPoint slides, and I also specialise
            in resources for advanced learners with Spanish as a first language,
            particularly to support accurate pronunciation.
          </p>

          <p>
            I began my career as a journalist in the UK, which explains my love
            of language and writing. English Channel Education is very much a
            one-person operation, so if you have an idea, need bespoke
            materials, or are interested in collaborating, I’d love to hear from
            you. Feel free to pop over to my contacts page and say hello!
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
        </div>

        <div className="about__materials-image-wrapper">
          <img
            src={materialsImage}
            alt="Example of English Channel Education teaching materials"
            className="about__materials-image"
            width="1536"
            height="1024"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
