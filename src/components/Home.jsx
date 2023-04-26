import { Link } from "react-router-dom";
import bible from "../assets/bible.jpeg";
import news from "../assets/tablet.jpeg";
import prayer from "../assets/prayer.jpg";
import { AppContext } from "../App";
import { useContext, useEffect } from "react";

const Home = () => {
  const { setActive } = useContext(AppContext);

  useEffect(() => {
    setActive("home");
  }, [setActive]);

  return (
    <>
      <header className="home-header">
        <div className="container">
          <div className="py-5 text-center">
            <span className="text-warning display-1 text-shadow">TO SEE HIS FACE</span> <br />{" "}
            <span className="display-6 text-sans">INTERNATIONAL REVIVAL MINISTRY</span>
            <p className="lead col-md-6 mx-auto my-3 verse p-3">
              <hr />
              <span className="">Revelation 22:4</span>
              <br />
              "No longer will there be any curse. The throne of God and of the Lamb will be in the city, and his
              servants will serve him. They will see HIS face, and HIS name will be on their foreheads."
              <hr />
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="container d-flex">
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="px-2">
                <h2 className="lead">Studies</h2>
                <hr />
                <div className="card-body">
                  <h3 className="display-6 text-sans">Ever Ready?</h3>
                  <img alt="study" src={bible} className="img-fluid w-100" />
                  <p className="my-3">
                    The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire...
                  </p>
                  <Link to="/" className="btn btn-warning ms-auto">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-3">
              <div className="px-2">
                <h2 className="lead">Newsletter</h2>
                <hr />
                <div className="card-body">
                  <h3 className="display-6 text-sans">Latest Edition</h3>
                  <img alt="study" src={news} className="img-fluid w-100" />
                  <p className="my-3">
                    Today as in the days of Noah, the heart of Man is continuously turning to evil, pleasure, and
                    godlessness. The world once again is losing the imprint of God´s image and character. Such a time of
                    apostasy, as in the old days, naturally has two major spiritual consequences...
                  </p>
                  <Link to="/" className="btn btn-warning ms-auto">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-3">
              <div className="px-2">
                <h2 className="lead">Prayer</h2>
                <hr />
                <div className="card-body">
                  <h3 className="display-6 text-sans">Prayer Requests</h3>
                  <img alt="study" src={prayer} className="img-fluid w-100" />
                  <p className="my-3">
                    The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire...
                  </p>
                  <Link to="/" className="btn btn-warning ms-auto">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light">
        <div className="container d-flex">
          <div className="row">
            <div className="col-md-4 p-3">
              <h2 className="lead">Media</h2>
              <hr />
              <h3 className="display-6 text-sans">The Most Difficult Sermon</h3>
              <p className="lead">
                It is today high time for the children of God to understand they can no longer conform to the present
                world and expect their lamps to be filled with the Holy Spirit. Believers need to wake-up, live up to
                every truth they know, and make the necessary character preparation that will allow them to stand in a
                time of crisis prior to the return of Christ.
              </p>
              <Link to="/" className="btn btn-warning ms-auto">
                See more videos
              </Link>
            </div>
            <div className="col-md-8 p-3">
              <div className="px-2 py-5 text-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uyGoFmuaoXQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="col-md-6 text-center mx-auto">
            <h3 className="display-4 text-sans text-warning text-shadow">Belief Statement</h3>
            <p className="lead">
              We stand on Biblical truth and its principles. Our goal is to help people prepare for the second coming of
              Jesus. We believe that Christ Character form within the believer will enable them to see Him face to face.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
