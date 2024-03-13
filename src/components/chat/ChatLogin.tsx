import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const ChatLogin = ({ handleLogin }: { handleLogin: Function }) => {
  const [name, setName] = useState("");

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Start chat
        </Typography>
        <TextField
          label="Please enter a username"
          placeholder="enter username"
          size="small"
          style={{ margin: "10px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          style={{ margin: "10px", backgroundColor: "pink", color: "black"}}
          onClick={() => handleLogin(name)}
        >
          Join chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChatLogin;