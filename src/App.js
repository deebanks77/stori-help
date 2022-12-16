import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import FAQs from "./components/FAQs";
import Support from "./components/Support";
import Settings from "./components/articles/Settings";
import ArticleTemplate from "./components/articles/CreateStoriUsingTemplate";
import ArticleConfigureYourStore from "./components/articles/ConfigureYourStore";
import ArticleHowToAddMedia from "./components/articles/HowToAddMedia";
import ArticleHowToAddProduct from "./components/articles/HowToAddProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Article />
              <FAQs />
              <Support />
            </div>
          }
        />
        <Route path="/article" element={<Article />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact-support" element={<Support />} />
        <Route path="/article/Change-Account-Settings" element={<Settings />} />
        <Route
          path="/article/Creating-Stories-Using-Templates"
          element={<ArticleTemplate />}
        />
        <Route
          path="/article/Configure-Your-Store"
          element={<ArticleConfigureYourStore />}
        />
        <Route
          path="/article/How-To-Add-Media"
          element={<ArticleHowToAddMedia />}
        />
        <Route
          path="/article/How-To-Add-Product-To-Your-Store"
          element={<ArticleHowToAddProduct />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
