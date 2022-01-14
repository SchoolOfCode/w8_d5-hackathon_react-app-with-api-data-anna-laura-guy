import React from "react";
import { useState, useEffect } from "react";

export function Display({ search }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      let response = await fetch(
        `https://the-one-api.dev/v2/character/?name=${search}`,
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer M_NvO75ukBdw8Ht5Bb-Z",
          },
        }
      );
      let data = await response.json();
      console.log(data);
      if (data.total > 0) {
        setCharacter(data.docs[0]);
      } else {
        console.log(
          "Please input a REAL character with their FULL name. True fans will know"
        );
      }
    }
    getCharacter();
  }, [search]);

  return (
    <div className="display">
      <img
        src="https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg"
        alt="Gandalf scowling"
        className="displayImg"
      ></img>
      <div className="displayText">
        <p> Name: {character.name}</p>
        <p> Gender: {character.gender}</p>
        <p> Race: {character.race}</p>
        <p> Hair: {character.hair}</p>
        <p> Height: {character.height !== "NaN" ? character.height : ""}</p>
        <p> DOB: {character.birth !== "NaN" ? character.birth : ""}</p>
        <p> Location: {character.realm !== "NaN" ? character.realm : ""}</p>
      </div>
    </div>
  );
}

export default Display;
