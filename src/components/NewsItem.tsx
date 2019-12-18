import * as React from 'react';

import { INewsItem } from '../../store/newsModel';

interface INewsItemProps {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { title, text, link, timestamp },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{text}</div>
      <a href={link}>{link}</a>
      <div>{timestamp.toLocaleDateString()}</div>
    </div>
  );
};

export default NewsItem;
