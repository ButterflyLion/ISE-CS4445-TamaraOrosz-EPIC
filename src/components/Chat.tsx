import { useState } from "react";
import { ChatCard } from "./chat/ChatCard";
import Header from "./chat/Header";
import ChatLogin from "./chat/ChatLogin";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../styles/Chat.css"
import { v4 as uid } from "uuid";
import { addUser } from "../features/messages/messaging-users-slice";

function Chat() {
  const dispatch = useAppDispatch();
  const messagingUsersState = useAppSelector((state: any) => state.messagingusers);
  const messagingusers = messagingUsersState.users;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (name: string) => {
    if (name.trim() !== "") {
      const user = messagingusers?.find((user) => user.name === name);
      let requestedUser = { name };

      if (user) {
        requestedUser.id = user.id;
      } else {
        requestedUser.id = uid();
        dispatch(addUser(requestedUser));
      }
      setUser(requestedUser);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="Chat">
      <Header />
      <div className="container" style={{ boxShadow: 'none', border: 'none' }}>
        {isLoggedIn ? (
          <ChatCard user={user} />
        ) : (
          <ChatLogin handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default Chat;