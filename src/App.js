import { useEffect, useState } from "react"
import NavBar from "./Components/NavBar";

function App() {
  const [loaded, setLoaded] = useState(false);

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
        <img alt="splashgif" src={require('./Components/resources/animate.gif')}/>
      </div>}
      {loaded && <NavBar />}
    </>
  );
}

export default App;
