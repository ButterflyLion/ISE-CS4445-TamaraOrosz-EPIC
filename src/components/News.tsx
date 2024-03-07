import { useState } from "react";
import { useFetchNewsQuery } from "../features/news/news-api-slice";

function News(){
    const [newsSubject, setNewsSubject] = useState("music");
    const { data = {}, isFetching } = useFetchNewsQuery(newsSubject);
    
    return (
        <div>
            <div>
                <h2>News subject to fetch:</h2>
                <select
                    value={newsSubject}
                    onChange={(e) => setNewsSubject(e.target.value)}
                >
                    <option value="festival">Festival</option>
                    <option value="music">Music</option>
                    <option value="concert">Concert</option>
                    <option value="alcohol">Alcohol</option>
                </select>
            </div>
            <div>
                {data.articles && data.articles.map((news: any) => (
                    <>
                        <div className="card-image">
                            <img src={news.urlToImage} alt={news.title} height={250} />
                            <span className="card-title">{news.source.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{news.title}</p>
                        </div>
                        <div className="card-action">
                            <a href={news.url} target="_blank" rel="noreferrer">
                                Full article
                            </a>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default News;