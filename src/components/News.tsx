import { useState } from "react";
import { useFetchNewsQuery } from "../features/news/news-api-slice";
import { Spinner, Container, Form } from "react-bootstrap";
import Article from "./Article";
import { NewsArticle } from "../types/NewsTypes";

function News() {
  const [newsSubject, setNewsSubject] = useState("music");
  const { data: data = {}, isFetching } = useFetchNewsQuery(newsSubject);
  const newsData: {articles: NewsArticle[]} = data as {articles: NewsArticle[]};

  return (
    <div>
      {isFetching ? (
        <div>
          <Spinner />
          <span>Fetching news...</span>
        </div>
      ) : (
        <>
          <Container className="d-flex flex-column align-items-center container-narrow">
            <h1>News</h1>
            <Form>
              <Form.Group>
                <Form.Label>News subject to fetch:</Form.Label>
                <Form.Select
                  value={newsSubject}
                  onChange={(e) => setNewsSubject(e.target.value)}
                >
                  <option value="festival">Festival</option>
                  <option value="music">Music</option>
                  <option value="concert">Concert</option>
                  <option value="alcohol">Alcohol</option>
                </Form.Select>
              </Form.Group>
            </Form>
            {newsData.articles?.map((article: any, index: number) => (
              <Article key={index} article={article} />
            ))}
          </Container>
        </>
      )}
    </div>
  );
}

export default News;
