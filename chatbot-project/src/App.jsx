import { ChatInput } from "./components/ChatInput";
import { useState } from "react";
import { Chatbot } from "supersimpledev";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

//onChange is a event in react which runs a function we change the text inside an <input>

//<></>: is the fragment= group elements together, without creating an extra <div>

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?hello chatbot",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is september 27",
      sender: "robot",
      id: "id4",
    },
  ]);
  //state liftting has been done heare in app component to share here from chatMessagaes component to  appcomponent
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
export default App;
