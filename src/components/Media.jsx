import { AppContext } from "../App";
import { useContext, useEffect } from "react";

const Media = () => {
  const { setActive } = useContext(AppContext);

  useEffect(() => {
    setActive("media");
  }, [setActive]);

  return (
    <>
      <header>
        <div className="container">
          <h1>Media</h1>
        </div>
      </header>
    </>
  );
};

export default Media;
