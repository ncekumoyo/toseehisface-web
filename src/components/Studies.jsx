import { AppContext } from "../App";
import { useContext, useEffect } from "react";

const Studies = () => {
  const { setActive } = useContext(AppContext);

  useEffect(() => {
    setActive("studies");
  }, [setActive]);

  return (
    <>
      <header>
        <div className="container">
          <h1>Studies</h1>
        </div>
      </header>
    </>
  );
};

export default Studies;
