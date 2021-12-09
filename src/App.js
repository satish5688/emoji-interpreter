import React, { useState } from "react";
import "./styles.css";

const emojiObject = {
  "😊": "smiling",
  "😀": "funny",
  "👍": "victory",
  "❤️": "love",
  "☠️": "danger",
  "😰": "sad",
  "🥶": "cold",
  "😎": "boss",
  "😡": "angry",
  "😈": "devil"
};

var emojiKnow = Object.keys(emojiObject);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function takeInput(event) {
    var userInput = event.target.value;

    var meaning = emojiObject[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this type of data";
    }
    setMeaning(meaning);
  }

  function emojiHandler(emoji) {
    var meaning = emojiObject[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> know your emotions</h1>
      <input
        style={{ padding: "6px", width: "80%", height: "2rem" }}
        onChange={takeInput}
      />
      <h2>{meaning}</h2>
      <h2>emoji we know</h2>
      {emojiKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler(emoji)}
            style={{ fontSize: "30px", padding: "6px", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
