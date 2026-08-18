import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState(""); //inside braket is initial value which empty string
  //input text above used = current data of 1st value and setInputText is updater function

  function saveInputText(event) {
    setInputText(event.target.value); //event.target = gives us the element that we are typing in (acesss of below input element) and .value used to get text
  }
  //lifting the state up: share state between multiple components

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  // function handleKeyDown(event) {
  //   if (event.key === "Enter") {
  //     sendMessage();
  //   }
  // }
  // function handleKeyDown(event) {
  //   if (event.key === "Escape") {
  //     sendMessage("");
  //   }
  // }

  // Combine both key checks into one function
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText(""); // Clears the input field when Escape is pressed
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
