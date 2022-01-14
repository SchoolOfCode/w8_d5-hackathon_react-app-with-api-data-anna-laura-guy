import React from "react";
import { useState, useEffect } from "react";

function Random({ handleClick, search }) {
  const [random, setRandom] = useState("");

  useEffect(() => {
    async function getRandomCharacter() {
      let response = await fetch(
        `https://the-one-api.dev/v2/character/?name=`,
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer M_NvO75ukBdw8Ht5Bb-Z",
          },
        }
      );
      let data = await response.json();
      console.log(data.docs);
      //const randomNumber = Math.floor(Math.random() * 933);
      const randomNumber = Math.floor(Math.random() * 933);
      setRandom(data.docs[randomNumber].name);
      console.log(data.docs[randomNumber].name);
    }
    getRandomCharacter();
  }, [search]);

  return (
    <div className="nav">
      <button
        onClick={() => {
          handleClick(random);
        }}
      >
        Random Character
      </button>
    </div>
  );
}

export default Random;
