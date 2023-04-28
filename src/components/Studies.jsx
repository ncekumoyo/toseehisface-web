import { Link } from "react-router-dom";
import bible from "../assets/bible.jpeg";

const Studies = () => {
  const series = [
    {
      id: 1,
      title: "Walking With God",
      picture: bible,
      summary: `The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire.`,
    },
    {
      id: 2,
      title: "Prepared for His Return",
      picture: bible,
      summary: `The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire.`,
    },
    {
      id: 3,
      title: "Fruits of the Holy Spirit",
      picture: bible,
      summary: `The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire.`,
    },
    {
      id: 4,
      title: "Jesus Christ, Our Most Precious Treasure",
      picture: bible,
      summary: `The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire.`,
    },
    {
      id: 5,
      title: "Walking With God",
      picture: bible,
      summary: `The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire.`,
    },
    {
      id: 6,
      title: "Walking With God",
      picture: bible,
      summary: `The disciples of Jesus expected to see their Lord coming in the clouds of heaven in their time;
                    their salvation and relationship with Jesus were matters of life not to play with. They put emphasis
                    on the Word of God, prayer or relationship with the Lord was their life priority, and living for
                    Jesus was their daily earnest desire.`,
    },
  ];

  return (
    <>
      <header className="studies-header">
        <div className="container">
          <div className="py-5 px-2">
            <h1 className="display-4 text-sans text-warning text-shadow">
              Revival Messages <br /> and Bible Studies
            </h1>
            <p className="lead col-md-6  my-3 verse p-3">
              <hr />
              To See His Face presents Bible studies, lessons and messages to help you on your Christian journey. It is
              our hope that you will be blessed as you search through the scriptures with us.
              <hr />
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="container d-flex">
          <div className="row">
            {series.map((study) => (
              <div className="col-md-6 col-lg-4 p-3" key={study.id}>
                <Link className="text-dark card-link" to="/studies">
                  <div className="p-2">
                    <h2 className="text-sans lead">{study.title}</h2>
                    <img alt="study" src={study.picture} className="img-fluid w-100" />
                    <p className="my-3">{study.summary}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Studies;
