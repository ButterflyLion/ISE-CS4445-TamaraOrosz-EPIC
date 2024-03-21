import { useState } from "react";
import { ChatCard } from "./chat/ChatCard";
import Header from "./chat/Header";
import ChatLogin from "./chat/ChatLogin";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../styles/Chat.css";
import { v4 as uid } from "uuid";
import {
  addUser,
  removeUser,
} from "../features/messages/messaging-users-slice";
import { removeAllMessages } from "../features/messages/messages-slice";
import { ChatRatingModal } from "./chat/ChatRatingModal";

function Chat() {
  const dispatch = useAppDispatch();
  const messagingUsersState = useAppSelector(
    (state: any) => state.messagingusers
  );
  const messagingusers = messagingUsersState.users;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);

  const handleLogin = (name: string) => {
    if (name.trim() !== "") {
      const user = messagingusers?.find((user: any) => user.name === name);
      let requestedUser: { id?: string; name: string } = { name };

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

  const handleLogout = () => {
    if (isLoggedIn) {
      setUser({});
      setIsLoggedIn(false);
      dispatch(removeUser(user));
      dispatch(removeAllMessages());
      setShowRatingModal(true);
    }
  };

  const handleRatingSubmit = (rating: number) => {
    console.log("Rating submitted: ", rating);
    setShowRatingModal(false);
  };

  const onClose = () => {
    setShowRatingModal(false);
  };

  return (
    <div className="Chat">
      <Header />
      <div className="container" style={{ boxShadow: "none", border: "none" }}>
        {isLoggedIn ? (
          <ChatCard user={user} handleLogout={handleLogout} />
        ) : (
          <ChatLogin handleLogin={handleLogin} />
        )}
      </div>
      <ChatRatingModal
        isOpen={showRatingModal}
        onClose={onClose}
        onSubmit={handleRatingSubmit}
      />
    </div>
  );
}

export default Chat;
