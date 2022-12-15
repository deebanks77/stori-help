import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { configImage } from "../images";

function ArticleConfigureYourStore() {
  return (
    <section className="sections configureStore">
      <div className="sections-container configureStore">
        <div className="back-btn">
          <Link to="/" className="back-button">
            <FaArrowLeft className="arrow" />
            <span>back to home</span>
          </Link>
        </div>

        <h1 className="section-header">CONFIGURE YOUR STORE</h1>

        <article className="configureStore-steps">
          <div className="steps">
            <p>
              Here, I will show you how to set up your store policies and
              payments. Head over to your account and log in to the dashboard.
              Once you’re in, the first screen you’ll see is your home screen.
            </p>
            <p>
              Select <strong>"Settings"</strong>
            </p>
            <div className="image">
              <img src={configImage.configImage1} alt="step1" />
            </div>
            <div className="step step-1">
              <p>
                <strong>STEP 1:</strong> Select “settings”. The next page is the
                general settings page.Fill the text boxes with the required
                information.
              </p>
              <div className="image">
                <img src={configImage.configImage2} alt="step1" />
              </div>
            </div>
          </div>
          <div className="step step-2">
            <p>
              <strong>STEP 2:</strong> Set up your payment settings with your
              preferred method of payment and save.
            </p>
            <div className="image">
              <img src={configImage.configImage3} alt="step2" />
            </div>
          </div>
          <div className="step step-3">
            <p>
              <strong>STEP 3:</strong> Next is the “Template”.
            </p>
            <div className="image">
              <img src={configImage.configImage4} alt="step3" />
            </div>
          </div>
          <div className="step step-4">
            <p>
              <strong>STEP 4:</strong> Set up “Notification” for your store by
              clicking on “Notification”
            </p>
            <div className="image">
              <img src={configImage.configImage5} alt="step4" />
            </div>
            <p style={{ marginTop: "10px" }}>
              When you are done with following all of these steps, save all
              settings.{" "}
            </p>
            <p style={{ color: "crimson" }}>
              <strong>OBSERVANCE:</strong> (There should be a separate option on
              the dashboard to see how the store looks like. There should also
              be an option to preview the store for them to test out their store
              settings).{" "}
            </p>
            <p>
              And that’s it! You can refer to the video tutorial to see how its
              done.
            </p>
            <p>
              If you need further assistance, kindly use the chat widget at the
              corner of this page or send an email to our support{" "}
              <a
                style={{ color: "blue" }}
                href="http://support@xcod.io"
                target="_blank"
                rel="noreferrer"
              >
                desk(support@xcod.io){" "}
              </a>{" "}
              for prompt assistance. Thank you!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticleConfigureYourStore;
