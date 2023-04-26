import { AppContext } from "../App";
import { useContext, useEffect } from "react";

const Contact = () => {
  const { setActive } = useContext(AppContext);

  useEffect(() => {
    setActive("contact");
  }, [setActive]);

  return (
    <>
      <header>
        <div className="container">
          <h1>Contact</h1>
        </div>
      </header>
    </>
  );
};

export default Contact;
