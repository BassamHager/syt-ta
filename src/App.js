import "./App.scss";
// components
import YachtGallery from "./components/yachts/YachtGallery";
// lightbox library

const App = () => (
  <div className="app">
    <div className="app-overlay">
      <div className="page-content">
        {/* loading... */}
        {/* Error Message... */}
        <YachtGallery />
      </div>
    </div>
  </div>
);

export default App;
