import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { templateImages } from "../images";

function ArticleTemplate() {
  return (
    <section className="sections template">
      <div className="sections-container template-container">
        <div className="back-btn">
          <Link to="/" className="back-button">
            <FaArrowLeft className="arrow" />
            <span>back to home</span>
          </Link>
        </div>
        <h1 className="section-header">CREATING STORIES USING TEMPLATES</h1>
        <div className="template-content">
          <p>
            To access your dashboard on STORI, you need to log into your
            account. If you are yet to access your account, please check out the
            guide on <span>how to log in</span> before proceeding.
          </p>
          <p>There are two ways to create stories on the stori app:</p>
          <div className="span">
            <span>1) From the scratch,</span> {"   "}
            <span>2) Using templates.</span>
            <p>To create from the scratch follow the steps below</p>
          </div>

          <div className="steps">
            <div className="step step-1">
              <p>
                <span>STEP 1: </span>Click on "New Stori"
              </p>
              <div className="image">
                <img src={templateImages.templateImage1} alt="step1" />
              </div>
            </div>

            <div className="step step-2">
              <p>
                <span>STEP 2: </span>Select “From Templates”
              </p>
              <div className="image">
                <img src={templateImages.templateImage2} alt="step2" />
              </div>
            </div>

            <div className="step step-3">
              <p>
                <span>STEP 3: </span>Enter “keyword”, “story template” and then
                click on “create story”{" "}
                <span style={{ color: "crimson" }}>(keyword doesn’t work)</span>
              </p>
              <div className="image">
                <img src={templateImages.templateImage3} alt="step3" />
              </div>
            </div>

            <div className="step step-4">
              <p>
                <span>STEP 4: </span>Edit using the editing tools on the left
                and right side panels just as stated above.
              </p>
              <div className="image">
                <img src={templateImages.templateImage4} alt="step4" />
              </div>
              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  Change background by clicking on the first icon
                </p>
                <div className="image">
                  <img src={templateImages.templateImage5} alt="step4" />
                </div>
              </div>
              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  To change “Templates” click on the “Star” icon
                </p>
                <div className="image">
                  <img src={templateImages.templateImage6} alt="step4" />
                </div>
              </div>
              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  To add Text, click on the “T” icon
                </p>
                <div className="image">
                  <img src={templateImages.templateImage7} alt="step4" />
                </div>
              </div>
              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  To change media on your template, select the picture icon.
                </p>
                <div className="image">
                  <img src={templateImages.templateImage8} alt="step4" />
                </div>
                <p>
                  You can also add GIFs, Video and your custom media to your
                  story by selecting any of the options as seen in the image.
                </p>
              </div>
              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  To add audio to your story template, click on the audio icon
                  as shown in the image and then click on “Add Media Library”
                </p>
                <div className="image">
                  <img src={templateImages.templateImage9} alt="step4" />
                </div>
              </div>
              <div className="step sub-step">
                <p>
                  On the next page, select media from folder and click on the
                  preferred audio file to use
                </p>
                <div className="image">
                  <img src={templateImages.templateImage10} alt="step4" />
                </div>
              </div>
              <div className="step sub-step">
                <p>
                  Next, you can choose to either add it on the slide or to the
                  whole story by selecting any of the two options provided
                </p>
                <div className="image">
                  <img src={templateImages.templateImage11} alt="step4" />
                </div>
              </div>
            </div>

            <div className="step step-5">
              <p>
                <span>STEP 5: </span>To add elements like emojis, shapes,
                stickers and so on, click on the icon as seen in the image
                below. Once you add any element or picture to your canvas, click
                on the element and tweak to edit the element on the right side
                panel where you see
                <span style={{ color: "crimson" }}> “Design” </span>and{" "}
                <span style={{ color: "crimson" }}>“Animation”</span>.
              </p>
              <div className="image">
                <img src={templateImages.templateImage12} alt="step5" />
              </div>

              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  To add engagement for your visitors to engage with your posts
                  or click to buy your products, follow the steps below
                </p>
                <div className="image">
                  <img src={templateImages.templateImage13} alt="step5" />
                </div>
                <p>
                  You can also choose to change the visual display of the
                  engagement type by editing the “engage” type with the editing
                  options on the right side panel just like this:
                </p>
              </div>
              <div className="step sub-step">
                <p style={{ fontWeight: "bold" }}>
                  To edit your engage option, tap the selected option and begin
                  to edit using the tools the right side panel of your dashboard
                </p>
                <div className="image">
                  <img src={templateImages.templateImage14} alt="step5" />
                </div>
              </div>
              <div className="step sub-step">
                <p>
                  To add digital product from your store manager, click on the{" "}
                  <strong>cart</strong> icon
                </p>
                <div className="image">
                  <img src={templateImages.templateImage15} alt="step5" />
                </div>
                <div className="image">
                  <img src={templateImages.templateImage16} alt="step5" />
                </div>
              </div>
            </div>

            <div className="step step-6">
              <p>
                <span>STEP 6: </span>Select <strong>“Preview”</strong> on the
                top right corner of your dashboard to preview your story.
              </p>
              <div className="image">
                <img src={templateImages.templateImage17} alt="step6" />
              </div>
            </div>

            <div className="step step-7">
              <p>
                <span>STEP 7: </span>Once you are satisfied with your story,
                select <strong>“Publish”</strong> to save in the preferred
                format.
              </p>
              <div className="image">
                <img src={templateImages.templateImage18} alt="step7" />
              </div>
              <div className="image">
                <img src={templateImages.templateImage19} alt="step7" />
              </div>
              <p>
                And that’s it! You can refer to the video tutorial to see how
                its done.
              </p>
              <p>
                If you need further assistance, kindly use the chat widget at
                the corner of this page or send an email to our support desk
                <strong>(support@xcod.io)</strong> for prompt assistance. Thank
                you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleTemplate;
