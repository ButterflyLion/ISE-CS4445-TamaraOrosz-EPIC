import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  CardActions,
  CardContent,
  CardHeader,
  Card,
} from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import { Messages } from "./Messages";
import { v4 as uid } from "uuid";
import { useAppDispatch } from "../../app/hooks";
import { addMessage } from "../../features/messages/messages-slice";
import { styles } from "../consts";

export const ChatCard = ({ user, handleLogout }: { user: any, handleLogout: Function }) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const postMessage = () => {
    if (message.trim() !== "") {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const newMessage = {
        id: uid(),
        message: message.trim(),
        userId: user.id,
        userName: user.name,
        time: `${hours}:${formattedMinutes}`,
      };
      dispatch(addMessage(newMessage));
    }
    setMessage("");
  };

  const handleLogoutClick = () => {
    handleLogout(user.name);
  };

  return (
    <Card sx={{ width: "25rem" }} style={styles.cardStyle}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: pink[200] }} aria-label="current-user">
            <PersonIcon />
          </Avatar>
        }
        title={user.name}
        style={styles.bgGradient}
        action={
          <Button color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        }
      />
      <CardContent style={{ ...styles.cardContentStyle, overflowY: "auto" }}>
        <Messages userId={user.id} />
      </CardContent>
      <CardActions disableSpacing style={{ background: grey[50] }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="standard"
          size="small"
          multiline
          sx={{ width: "20rem" }}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button aria-label="send-message" onClick={postMessage}>
          <SendIcon style={{color: pink[200]}} />
        </Button>
      </CardActions>
    </Card>
  );
};
