import { grey, pink, yellow } from "@mui/material/colors";

export const styles = {
  cardStyle: {
    overflow: "hidden",
  },
  cardContentStyle: {
    background: pink[50],
    height: "400px",
    overflowY: "auto",
    marginRight: "-15px",
  },
  bgGradient: {
    background: `linear-gradient(to right, ${yellow[100]}, ${pink[200]})`,
    color: grey[800],
  },
};
