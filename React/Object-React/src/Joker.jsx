import { useState, useEffect } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  let getJoke = async () => {
    let get = await fetch(URL);
    let response = await get.json();
    console.log(response);
    setJoke({ setup: response.setup, punchline: response.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let get = await fetch(URL);
      let response = await get.json();
      console.log(`Ruk ja Baba, Abhi ek mast joke sunata hu`);
      setJoke({ setup: response.setup, punchline: response.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}
