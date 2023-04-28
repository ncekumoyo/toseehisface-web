import edem from "../assets/Bobo.webp";
import zo from "../assets/cv pic - Copy.webp";
import amara from "../assets/amara_edited.webp";
import clock from "../assets/clock.png";

const About = () => {
  return (
    <>
      <header className="about-header">
        <div className="container">
          <div className="py-5 px-2">
            <h1 className="display-4 text-sans text-warning text-shadow">About Us</h1>
            <p className="lead col-md-6  my-3 verse p-3">
              <hr />
              <span className=" fw-bold">To See HIS Face Ministries International</span> - We stand on Biblical truth
              and its principles. Our goal is to help people prepare for the second coming of Jesus. We believe that
              Christ Character form within the believer will enable them to see Him face to face.
              <hr />
            </p>
          </div>
        </div>
      </header>

      <section className="bg-dark text-light py-5">
        <div className="container">
          <h2 className="display-4 text-center text-sans mb-5">Meet the Team</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                className="rounded-circle border border-warning border-5 my-3"
                src={edem}
                alt="team member"
                width={150}
                height={150}
              />
              <div>
                <span className="display-6 text-warning text-sans">Edem Fabrice Ameyou</span>
                <br />
                <span>DBS, MArch, MDiv</span>
              </div>
              <p className="text-start my-3 px-2">
                Pastor Edem Ameyou was born in a traditional Presbyterian family, he became a Seventh Day Adventist in
                1994. His biggest concern has been to understand the meaning of life. He found out that on earth, the
                life of Man is meaningless without the presence of Jesus. Today, he lives to share the love of Christ,
                and His very special grace that leads to eternal life.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="rounded-circle border border-warning border-5 my-3"
                src={zo}
                alt="team member"
                width={150}
                height={150}
              />
              <div>
                <span className="display-6 text-warning text-sans">Zo Misaina Ameyou</span>
                <br />
                <span>MS Nursing</span>
              </div>
              <p className="text-start my-3 px-2">
                Pastor Edem Ameyou was born in a traditional Presbyterian family, he became a Seventh Day Adventist in
                1994. His biggest concern has been to understand the meaning of life. He found out that on earth, the
                life of Man is meaningless without the presence of Jesus. Today, he lives to share the love of Christ,
                and His very special grace that leads to eternal life.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="rounded-circle border border-warning border-5 my-3"
                src={amara}
                alt="team member"
                width={150}
                height={150}
              />
              <div>
                <span className="display-6 text-warning text-sans">Amara Salami Epse Fombi</span>
                <br />
                <span>BA Office Administration</span>
              </div>
              <p className="text-start my-3 px-2">
                Pastor Edem Ameyou was born in a traditional Presbyterian family, he became a Seventh Day Adventist in
                1994. His biggest concern has been to understand the meaning of life. He found out that on earth, the
                life of Man is meaningless without the presence of Jesus. Today, he lives to share the love of Christ,
                and His very special grace that leads to eternal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-3">
                <img src={clock} alt="bible" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5">
                <p className="lead text-center">
                  <ul className="text-start">
                    <li>The time has come to return to primitive godliness.</li>
                    <li>The time has come to give God the instruments, so He might finish the work.</li>
                    <li>The time has come to be living witnesses for Jesus-Christ;</li>
                    <li>The time has come to be written letters of Jesus-Christ.</li>
                  </ul>
                  <span className="text-sans text-warning text-shadow text-center display-4">Now is the time!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
