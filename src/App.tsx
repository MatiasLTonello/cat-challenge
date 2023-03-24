import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}/?json=true`;

function App() {
  const [fact, setFact] = useState("");
  const [urlImage, setUrlImage] = useState(null);

  const getFact = async () => {
    const fact = await fetch("https://catfact.ninja/fact").then((response) =>
      response.json()
    );
    setFact(fact.fact);
  };

  const getImage = async () => {
    const image = await fetch("https://cataas.com/cat/says/hola").then(
      (response) => response.body
    );

    console.log(image);
  };

  useEffect(() => {
    getFact();
    getImage();
  }, []);

  return <div>{fact}</div>;
}

export default App;
