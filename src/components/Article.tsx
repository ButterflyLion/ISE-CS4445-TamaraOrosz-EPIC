import { Container } from "react-bootstrap";
import { NewsArticle } from "../types/NewsTypes";

function Article({ article }: { article: NewsArticle }) {
  return (
    <Container>
      <div className="card-image">
        <img src={article.urlToImage} alt={article.title} height={50} />
        <span className="card-title">{article.source.name}</span>
      </div>
      <div className="card-content">
        <p>{article.title}</p>
      </div>
      <div className="card-action">
        <a href={article.url} target="_blank" rel="noreferrer">
          Full article
        </a>
      </div>
    </Container>
  );
}

export default Article;
