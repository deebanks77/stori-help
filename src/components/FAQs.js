import React, { useReducer } from "react";
// import { faqData } from "./data";
import { RxPlus, RxMinus } from "react-icons/rx";
import reducer from "./reducer";

const initialState = {
  show1: false,
  show2: false,
  show3: false,
  show4: false,
  show5: false,
  show6: false,
};

function FAQs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="section FAQs" id="FAQs">
      <h1 className="section-header FAQs">Fequently asked questions</h1>

      <div className="all-questions">
        <div className={`question ${state["show6"] ? "show" : ""} `}>
          <div className="plusIcon" onClick={() => dispatch({ type: "SHOW6" })}>
            {state["show6"] ? <RxPlus /> : <RxMinus />}
          </div>
          <h4 className="">What is STORI?</h4>
          <p className={`faqContent ${state["show6"] ? "" : "showFaqContent"}`}>
            Stori is a web story with an easy drag and drop builder that builds
            web stories [in amp format], Quizzes, Polls, mobile ecom stores and
            more that will help engage your audience, get insane SEO traffic,
            generate leads, drive sales, gain insights and shoot your
            conversions to the moon.
          </p>
        </div>
        <div className={`question ${state["show1"] ? "" : "show"}`}>
          <div className="plusIcon" onClick={() => dispatch({ type: "SHOW1" })}>
            {state["show1"] ? <RxPlus /> : <RxMinus />}
          </div>
          <h4 className="">Who is STORI for?</h4>
          <p className={`faqContent ${state["show1"] ? "" : "showFaqContent"}`}>
            Stori is a great fit for anybody either web or mobile platform where
            users have need drive insane traffic, generate leads and engage
            their audience. Whether you're a blog, website, e-commerce store, or
            social media management tool, STORI app makes creating web stories
            seamless. Check out some of our 'demos here' (Insert link to demo
            and create a short video) to see STORI in action.
          </p>
        </div>
        <div className={`question ${state["show2"] ? "" : "show"}`}>
          <div className="plusIcon" onClick={() => dispatch({ type: "SHOW2" })}>
            {state["show2"] ? <RxPlus /> : <RxMinus />}
          </div>
          <h4 className="">Is the STORI available on mobile?</h4>
          <p className={`faqContent ${state["show2"] ? "showFaqContent" : ""}`}>
            We're currently available on web platforms, so the STORI will work
            on your mobile website responsively.
          </p>
        </div>
        <div className={`question ${state["show3"] ? "" : "show"}`}>
          <div className="plusIcon" onClick={() => dispatch({ type: "SHOW3" })}>
            {state["show3"] ? <RxPlus /> : <RxMinus />}
          </div>
          <h4 className="">
            Do users need to sign in to STORI, or create a STORI account, when
            using the app?
          </h4>
          <p className={`faqContent ${state["show3"] ? "showFaqContent" : ""}`}>
            Yes, users will need to sign into your STORI account in order to use
            the STORI app. We have taken out the normal onboarding steps, so
            your users can get straight to creating a web story by logging in
            after purchasing a plan.
          </p>
        </div>
        <div className={`question ${state["show4"] ? "" : "show"}`}>
          <div className="plusIcon" onClick={() => dispatch({ type: "SHOW4" })}>
            {state["show4"] ? <RxPlus /> : <RxMinus />}
          </div>
          <h4 className="">
            I plan to charge users to use the STORI app through my reseller
            account, or make it only available to premium users. Is this
            possible?
          </h4>
          <p className={`faqContent ${state["show4"] ? "showFaqContent" : ""}`}>
            Please email our support team support@xcod.io if you plan on only
            making your STORI app available to paid customers, or charge your
            users to access STORI. This arrangement requires that you upgrade to
            the resellers plan should you decide to.
          </p>
        </div>
        <div className={`question ${state["show5"] ? "" : "show"}`}>
          <div className="plusIcon" onClick={() => dispatch({ type: "SHOW5" })}>
            {state["show5"] ? <RxPlus /> : <RxMinus />}
          </div>
          <h4 className="">
            I can’t find answers to my questions. Where do I go for help?
          </h4>
          <p className={`faqContent ${state["show5"] ? "showFaqContent" : ""}`}>
            Please click here for assistance support@xcod.io A member of our
            team will attend to you
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
