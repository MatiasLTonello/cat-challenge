import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");

  const getFact = async () => {
    const fact = await fetch("https://catfact.ninja/fact").then((response) =>
      response.json()
    );
    setFact(fact.fact);
  };

  useEffect(() => {
    getFact();
  }, []);

  return <div>{fact}</div>;
}

export default App;
