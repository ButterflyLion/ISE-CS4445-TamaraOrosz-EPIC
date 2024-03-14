import { Card, Button } from "react-bootstrap";
import { NewsArticle } from "../types/NewsTypes";
import { pink } from "@mui/material/colors";

function Article({ article }: { article: NewsArticle }) {
  return (
    <Card style={{ width: "18rem", margin: "10px", background: pink[50] }}>
      {article.urlToImage ? (
        <Card.Img variant="top" src={article.urlToImage} />
      ) : (
        <Card.Img
          variant="top"
          src={`https://via.placeholder.com/300x200?text=${article.title}`}
        />
      )}
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.source.name}</Card.Text>
        <Button
          href={article.url}
          style={{ background: pink[200], border: pink[100] }}
        >
          Full article
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Article;
