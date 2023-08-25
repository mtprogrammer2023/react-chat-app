import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPages = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="5fa13644-d081-4061-b0f1-401c6d259044"
        username={props.user.username}
        secret={props.user.username}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPages;
