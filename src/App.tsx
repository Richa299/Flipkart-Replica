import "./App.css";
import Card from "./components/card/Card";
import Category from "./components/category/Category";
import ContentSection from "./components/content-section/ContentSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import contentData from "./data/contentSection.json";

function App() {
  return (
    <>
      <Navbar />
      <Category />
      {contentData.map((item) => {
        return <ContentSection item={item} />;
      })}
      <Card />
      {/* <ContentSection /> */}
      <Footer />
    </>
  );
}

export default App;
