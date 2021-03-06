import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ð": "Face Savoring Food",
  "ðĪ": "Hugging Face",
  "ð": "Neutral Face",
  "ðĩâðŦ": "Face with Spiral Eyes",
  "ðģ": " Flushed Face",
  "ðĨš": "Pleading Face",
  "ðĪĐ": "Star-Struck",
  "ðĪŠ": "Zany Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Translator </h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Search for emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {meaning} </h2>

      <h3> emojis we know:</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
