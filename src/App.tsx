import "./App.css";
import Card from "./components/card/Card";
import Category from "./components/category/Category";
import ContentSection from "./components/content-section/ContentSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Category />
      <ContentSection />
      <Card />
      <ContentSection />
      <Footer />
    </>
  );
}

export default App;
