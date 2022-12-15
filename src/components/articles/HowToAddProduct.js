import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { howToAddProduct } from "../images";

function ArticleHowToAddProduct() {
  return (
    <section className="sections">
      <div className="sections-container howToAddProduct">
        <div className="back-btn">
          <Link to="/" className="back-button">
            <FaArrowLeft className="arrow" />
            <span>back to home</span>
          </Link>
        </div>
        <h1 className="section-header">HOW TO ADD PRODUCT TO YOUR STORE</h1>

        <article className="howToAddProduct-steps">
          <p>
            To add products to your store, you need to first create a store. If
            you have not already created any, please kindly check out the guide
            on how to configure and set up your store.
          </p>
          <p>
            After creating a store, go to the <strong>STORI</strong> dashboard
            and click on the <strong>STORE MANAGER</strong> to add products to
            your store.{" "}
          </p>
          <p>Here is a screenshot to guide you</p>
          <div className="image">
            <img src={howToAddProduct.howToAddProductImage1} alt="step1" />
          </div>
          <div className="steps">
            <div className="step step-1">
              <p>
                <strong>STEP 1:</strong> Select <strong>STORE MANAGER</strong>{" "}
                on the top of your dashboard.
              </p>
              <div className="image">
                <img src={howToAddProduct.howToAddProductImage2} alt="step1" />
              </div>
            </div>
            <div className="step step-2">
              <p>
                <strong>STEP 2:</strong> Select <strong>ADD PRODUCT</strong>.
                Enter <strong>Product title</strong>,{" "}
                <strong>description</strong>, and <strong>product price</strong>
                . Click on <strong>NEXT</strong>
              </p>
              <div className="image">
                <img src={howToAddProduct.howToAddProductImage3} alt="step2" />
              </div>
              <div className="image">
                <img src={howToAddProduct.howToAddProductImage4} alt="step2" />
              </div>
            </div>
            <div className="step step-3">
              <p>
                <strong>STEP 3:</strong> Add <strong>PRODUCT ASSET</strong>.
                Upload an image of the product by selecting{" "}
                <strong>“upload product”</strong> and{" "}
                <strong>“feature product”</strong> and then click on{" "}
                <strong>NEXT</strong>.
              </p>
              <div className="image">
                <img src={howToAddProduct.howToAddProductImage5} alt="step3" />
              </div>
              <p>
                <strong>Note:</strong> Max file size for digital product: 5mb
                (zip file). You can add more than one image of the same product.
              </p>
            </div>
          </div>
        </article>
        <article className="trackOrders">
          <div className="step step-1">
            <h4 style={{ textAlign: "left" }}>Track Orders</h4>
            <p>
              <strong>STEP 1:</strong> Select <strong>“Orders”</strong>. Enter
              the transaction <strong>ID</strong> to filter the orders
            </p>
            <div className="image">
              <img src={howToAddProduct.howToAddProductImage6} alt="step1" />
            </div>
          </div>

          <div className="step step-1">
            <h4 style={{ textAlign: "left" }}>Track Analytics</h4>
            <p>
              Select <strong>“Analytics”</strong> to see reports on product
              sales
            </p>
            <div className="image">
              <img src={howToAddProduct.howToAddProductImage7} alt="step1" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticleHowToAddProduct;
