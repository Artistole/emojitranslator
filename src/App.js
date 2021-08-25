import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😋": "Face Savoring Food",
  "🤗": "Hugging Face",
  "😐": "Neutral Face",
  "😵‍💫": "Face with Spiral Eyes",
  "😳": " Flushed Face",
  "🥺": "Pleading Face",
  "🤩": "Star-Struck",
  "🤪": "Zany Face"
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
