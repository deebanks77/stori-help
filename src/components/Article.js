import React, { useEffect, useRef } from "react";
import { article } from "./data";
import { Link } from "react-router-dom";
import video from "../videos/StoriDemo.mp4";

function Article() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <section className="section help" id="top-article">
      <div className="videoContainer">
        <video
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "395px",
            margin: "0 auto",
          }}
          autoPlay
          muted
          loop
          controls
          src={video}
          ref={vidRef}
          // className="video"
        ></video>
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
