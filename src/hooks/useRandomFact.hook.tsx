import { useState, useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function useRandomFact() {
  const [fact, setFact] = useState();

  const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
  };

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  // para recuperar la cita al cargar la página
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
