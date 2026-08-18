import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({ chatMessages }) {
  // as chatMessages is a normal variable and after updating it, it will not update html hence this line "React.useState() used to convert that into state "
  // const chatMessages = array[0]; //current data i.e., value of chatMessages(The current data)
  // const setChatMessages = array[1]; //second value of the array is the function that updates the data
  //const [chatMessages, setChatMessages] = array; //this line is short cut of above two lines as destructuring used here
  //in React,we should not update data directly like using push method below
  //always use function like above in chatMessages to update the data

  /* chatMessages.push({
                  message: "test",
                  sender: "user",
                  id: crypto.randomUUID(),
                });

                console.log(chatMessages); */
  //this is not right method to update data directly.instead do like below by using updater function

  //below onClick is called Event and {sendMessage} is event handler

  //event prop must use camelCase, first letter must be small

  //State = data that is connected to HTML, When we update this data,
  // it will update the HTML
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
