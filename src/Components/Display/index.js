import React from "react";
import { useState, useEffect } from "react";

export function Display({ search }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://the-one-api.dev/v2/character/?name=${search}`,
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer M_NvO75ukBdw8Ht5Bb-Z",
          },
        }
      );
      let data = await response.json();
      setCharacter(data.docs[0]);
    }
    getCharacter();
  }, [search]);

  return (
    <div>
      <img
        src="https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg"
        alt="Gandalf scowling"
      ></img>
      <div>
        <p> name: {character.name}</p>
        <p> hair: {character.hair}</p>
        <p> </p>
      </div>
    </div>
  );
}

export default Display;
