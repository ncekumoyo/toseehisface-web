import { AppContext } from "../App";
import { useContext, useEffect } from "react";

const Newsletter = () => {
  const { setActive } = useContext(AppContext);

  useEffect(() => {
    setActive("newsletter");
  }, [setActive]);

  return (
    <>
      <header>
        <div className="container">
          <h1>Newsletter</h1>
        </div>
      </header>
    </>
  );
};
export default Newsletter;
