import React, { useState, useEffect } from "react";
import supabase from "../contexts/supabaseClient";

export default function ArticleCard({ article, src, onDataChange }) {
  const { id, category, title } = article;
  const [styles, setStyle] = useState({
    display: "none",
  });
  const [photo, setPhoto] = useState(null);

  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    onDataChange(articleData);
  }, [articleData]);

  const getSingleArticle = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select(" id, title, author, article, likes")
      .eq("id", id)
      .single();

    if (error) {
      console.log(error.error_description);
      console.log(error.message);
    }

    if (data) {
      setArticleData({
        id: data.id,
        title: data.title,
        author: data.author,
        article: data.article,
        likes: data.likes,
      });
    }
  };

  return (
    <>
      {article && (
        <>
          <div style={{ display: "flex", position: "relative" }}>
            <div
              className="card-text-area"
              onMouseOver={() => setStyle({ display: "block" })}
              onMouseLeave={() => setStyle({ display: "none" })}
            >
              <div className="card-text-container">
                <span className="card-category">{category}</span>
                <h1 className="card-title">{title}</h1>
              </div>
              <button
                className="card-button"
                style={styles}
                onClick={(e) => {
                  e.preventDefault();
                  getSingleArticle();
                }}
              >
                CZYTAJ
              </button>
            </div>
            <img
              src={`https://vgrtdhqwzgkegugwynsl.supabase.co/storage/v1/object/public/articles/photos/${id}`}
              className="card-photo"
            />
          </div>
        </>
      )}
    </>
  );
}