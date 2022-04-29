import { useEffect, useState } from "react"
import NavBar from "../NavBar";

const HomePage = () => {

const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(() => true)
    }, 4000);
  }, []);

  return (
    <>
      {loaded === false &&
      <div style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#010101",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <img alt="splashgif" src={require('../resources/animate.gif')}/>
      </div>}
      {loaded && <NavBar />}
    </>
  );
};

export default HomePage;
