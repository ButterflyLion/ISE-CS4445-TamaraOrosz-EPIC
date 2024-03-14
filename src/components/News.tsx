import { useEffect, useState } from "react";
import { useFetchNewsQuery } from "../features/news/news-api-slice";
import {
  Spinner,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
} from "react-bootstrap";
import Article from "./Article";
import { NewsArticle } from "../types/NewsTypes";
import SearchIcon from "@mui/icons-material/Search";

function News() {
  const [newsSubject, setNewsSubject] = useState("");
  const { data: data = {}, isFetching } = useFetchNewsQuery(newsSubject);
  const newsData: { articles: NewsArticle[] } = data as {
    articles: NewsArticle[];
  };
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState<NewsArticle[]>([]);

  useEffect(() => {
    if (newsData.articles) {
      const filteredData = newsData.articles.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    }
  }, [newsData.articles, searchInput]);

  return (
    <div>
      {isFetching ? (
        <div className="d-flex flex-column align-items-center">
          <Spinner />
          <span>Fetching news...</span>
        </div>
      ) : (
        <>
          <Container className="d-flex flex-column align-items-center">
            <h1>News</h1>
            <Form id="news-form">
              <Row>
                <Col>
                  <Form.Group style={{ margin: "10px" }}>
                    <Form.Select
                      id="news-subject-select"
                      value={newsSubject}
                      onChange={(e) => setNewsSubject(e.target.value)}
                    >
                      <option>Select a news subject</option>
                      <option value="festival">Festival</option>
                      <option value="music">Music</option>
                      <option value="concert">Concert</option>
                      <option value="alcohol">Alcohol</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <InputGroup style={{ margin: "10px" }} className="mb-3">
                    <Form.Control
                      id="search-input"
                      type="text"
                      placeholder="Search news..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <InputGroup.Text id="basic-addon1">
                      <SearchIcon />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
            </Form>
            <div className="article-grid-container">
              {filteredResults.length === 0
                ? newsData.articles?.map((article: any, index: number) => (
                    <Article key={index} article={article} />
                  ))
                : filteredResults.map((article: any, index: number) => (
                    <Article key={index} article={article} />
                  ))}
            </div>
          </Container>
        </>
      )}
    </div>
  );
}

export default News;
