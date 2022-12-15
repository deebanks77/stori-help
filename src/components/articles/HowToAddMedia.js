import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { howToAddMedia } from "../images";

function ArticleHowToAddMedia() {
  return (
    <section className="sections">
      <div className="sections-container howToAddMedia">
        <div className="back-btn">
          <Link to="/" className="back-button">
            <FaArrowLeft className="arrow" />
            <span>back to home</span>
          </Link>
        </div>

        <h1 className="section-header">HOW TO ADD MEDIA</h1>
        <article className="howToAddMedia-steps">
          <p>
            In this article, I’ll show you how to create a media folder and add
            media for your web stories and digital store using the STORI app.
            For a detailed guide on how to create one, refer to the video by
            clicking on this link
          </p>
          <p>So, for the purpose of this article, let’s begin</p>

          <div className="steps">
            <div className="step step-1">
              <p>
                <strong>STEP 1:</strong> Select <strong>Media</strong> on the
                top of your dashboard
              </p>
              <div className="image">
                <img src={howToAddMedia.howToAddMediaImage1} alt="step1" />
              </div>
            </div>
            <div className="step step-2">
              <p>
                <strong>STEP 2:</strong> On the next page, create a folder for
                the files you are about to upload by clicking on{" "}
                <strong>CREATE FOLDER</strong> to create one and save
              </p>
              <div className="image">
                <img src={howToAddMedia.howToAddMediaImage2} alt="step2" />
              </div>
            </div>
            <div className="step step-3">
              <p>
                <strong>STEP 3:</strong> Click on add media. Go ahead and add
                pictures, audios or video of your choice to your folder and{" "}
                <strong>UPLOAD</strong>. (Ensure media is in the format
                required)
              </p>
              <div className="image">
                <img src={howToAddMedia.howToAddMediaImage3} alt="step3" />
              </div>
              <p>
                And that’s how you add media to your folders. Its as simple as
                that.
              </p>
              <p>
                If you need further assistance, kindly use the chat widget at
                the corner of this page or send an email to our support
                desk(support@xcod.io) for prompt assistance. Thank you!
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticleHowToAddMedia;
