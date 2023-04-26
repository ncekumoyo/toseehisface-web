import { AppContext } from "../App";
import { useContext, useEffect } from "react";

const Prayer = () => {
  const { setActive } = useContext(AppContext);

  useEffect(() => {
    setActive("prayer");
  }, [setActive]);

  return (
    <>
      <header>
        <div className="container">
          <h1>Prayer Corner</h1>
        </div>
      </header>
    </>
  );
};

export default Prayer;
