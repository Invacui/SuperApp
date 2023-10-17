import React from "react";

const NewsItem = ({ item }) => {
  // Use the URL object to parse the URL and extract the hostname
  const website = new URL(item.url).hostname;

  const date = item.publishedAt;
  const formatDate = date.replace("T", " | ");
  const formatTime = formatDate.replace("Z", "");

  return (
    <a href={item.url} className="article">
      <div className="article-image">
        <div className="img-article-ibox">
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
          <div className="article-details">{formatTime}</div>
        </div>
      </div>

      <div class="a-d">
        <p className="article-description">{item.description}</p>
      </div>
    </a>
  );
};

export default NewsItem;

      {/*   <div className="article-content">
        <div className="article-source">
          <img
            src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={item.source.id}
          />
          <span>&nbsp;{item.source.name}</span>
        </div> 
        
      </div>*/}