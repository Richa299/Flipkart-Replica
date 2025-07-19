import "./App.css";
import Card from "./components/card/Card";
import Category from "./components/category/Category";
import ContentSection from "./components/content-section/ContentSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import contentData from "./data/contentSection.json";
import cardData from "./data/cardContent.json";
import Carousel from "./components/carousel/Carousel";

function App() {
  console.log(contentData);
  return (
    <>
      <Navbar />
      <Category />
      <Carousel />
      {contentData[0].data.map((item) => {
        return <ContentSection item={item} />;
      })}
      <div className="card-grid">
        {cardData.map((item) => {
          return <Card item={item} />;
        })}
      </div>
      {contentData[1].data.map((item) => {
        return <ContentSection item={item} />;
      })}
      <Footer />
    </>
  );
}

export default App;
