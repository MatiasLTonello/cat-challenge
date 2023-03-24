import { useEffect, useState } from "react";
import "./App.css";

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}/?json=true`;
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

function App() {
  const [fact, setFact] = useState("");
  const [urlImage, setUrlImage] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}

export default App;
