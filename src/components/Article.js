import React, { useState } from "react";
import { article } from "./data";
import { Link } from "react-router-dom";

function Article() {
  const [embedVideo, setEmbedVideo] = useState(true);
  // const handlePlay = () => {
  //   setEmbedVideo(true);
  // };
  // window.addEventListener("click", function (event) {
  //   if (event.target.id !== "youtubeIcon") {
  //     setEmbedVideo(false);
  //   }
  // });
  return (
    <section className="section help" id="top-article">
      <div className="videoContainer">
        {embedVideo && (
          <div className="video">
            <iframe
              width="100%"
              height="398px"
              src="https://www.youtube.com/embed/TP_AwjkiANE?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay;"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="title">
        <h1 className="section-header ">top articles</h1>
        <div className="underline"></div>
      </div>

      <div className="articles">
        {article.map((item, index) => {
          const { title, content, page } = item;
          return (
            <Link to={`/article/${page}`} key={index}>
              <div className="article">
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Article;
