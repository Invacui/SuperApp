import React, { useState, useEffect } from "react";
import NewsItem from './NewsItem'
import './api.css'

const News_Card = () => {
  const [item, setItem] = useState(null); // Change to a single item
  const [cat, setCat] = useState("general");
  const key = "984b41e37cb7432a847c44b85714c97c";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
    )
      .then((res) => res.json())
      .then((data) => setItem(data.articles[0])); // Access the first news item
  }, [cat]);

  return (
    <div>
      {item && <NewsItem item={item} />} {/* Render NewsItem if item exists */}
    </div>
  );
};

export default News_Card;
