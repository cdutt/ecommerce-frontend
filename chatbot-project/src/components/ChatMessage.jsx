import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";
export function ChatMessage({ message, sender }) {
  // const message = props.message; //attributes of html of app can be accessed through props object, as prop make our component reusable
  // const sender = props.sender;
  // const {message, sender} = props;

  /*
                          if (sender === "robot") {
                            return (
                              <div>
                                <img src="robot.png" width="50" />
                                {message}
                              </div>
                            );
                          }
                            */
  //below '&&' guard operator is used as two times if cant be used  below in jsx code
  //and we can write the code without duplicating
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>

      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
