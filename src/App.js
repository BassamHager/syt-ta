import "./App.scss";
// components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import YachtGallery from "./components/yachts/YachtGallery";

const App = () => (
  <div className="app">
    <Header />
    <div className="app-overlay">
      <div className="page-content">
        {/* loading... */}
        {/* Error Message... */}
        <YachtGallery />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
