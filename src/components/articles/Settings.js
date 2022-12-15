import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { settingImages } from "../images";

function Settings() {
  return (
    <section className="sections settings">
      <div className="sections-container settings-container">
        <div className="back-btn">
          <Link to="/" className="back-button">
            <FaArrowLeft className="arrow" />
            <span>back to home</span>
          </Link>
        </div>

        {/* <h1 className="section-header">SETTINGS</h1> */}
        <div className="settings-top">
          <h1>CHANGE ACCOUNT SETTINGS</h1>
          <p className="steps">
            <span>STEP 1: </span>Click on <span>“settings”</span> on the top of
            your dashboard. <span>Update</span> your profile settings by
            changing the name and password. Click on “update” to save changes.
          </p>
          <div className="image">
            <img src={settingImages.settingsImage1} alt="step1" />
          </div>
          <div className="image">
            <img src={settingImages.settingsImage2} alt="step2" />
          </div>
        </div>

        <div className="settings-bottom">
          <h2>CHANGE BILLING SETTINGS</h2>
          <p>Create custom domain and change domain settings</p>
          <p>
            <span>STEP 1: </span>Select “domain”.{" "}
            <span>(domain settings isn’t complete)</span>
          </p>
          <div className="image">
            <img src={settingImages.settingsImage3} alt="step3" />
          </div>
          <p>
            <span>STEP 2: </span>Select “add domain” and create.{" "}
            <span>(domain settings isn’t complete)</span> And that’s it! You can
            refer to the video tutorial to see how its done.
          </p>
          <p>
            If you need further assistance, kindly use the chat widget at the
            corner of this page or send an email to our support
            desk(support@xcod.io) for prompt assistance. Thank you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Settings;
