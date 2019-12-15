import * as React from "react";
import NewsItem from "./NewsItem";
import { getNews } from "../../store/newsApi";
import { INewsItem } from "../../store/newsModel";

const News: React.FC = () => {
  const [news, setNews] = React.useState<INewsItem[]>([]);
  React.useEffect(() => {
    getNews()
      .then(res => setNews(res.data))
      .catch(err => console.warn("Getting news problem", err));
  }, []);
  return (
    <div>
      News
      {news.map(item => {
        return <NewsItem data={item} key={item.id} />;
      })}
    </div>
  );
};

export default News;
