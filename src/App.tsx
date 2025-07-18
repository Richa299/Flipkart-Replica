import "./App.css";
import Card from "./components/card/Card";
import Category from "./components/category/Category";
import ContentSection from "./components/content-section/ContentSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import contentData from "./data/contentSection.json";
import cardData from "./data/cardContent.json";

function App() {
  return (
    <>
      <Navbar />
      <Category />
      {contentData.map((item) => {
        return <ContentSection item={item.data[0]} />;
      })}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          rowGap: "2rem",
          marginTop: "2rem",
        }}
      >
        {cardData.map((item) => {
          return <Card item={item} />;
        })}
      </div>
      {contentData.map((item) => {
        return <ContentSection item={item.data[1]} />;
      })}
      <Footer />
    </>
  );
}

export default App;
