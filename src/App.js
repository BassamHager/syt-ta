import "./App.scss";
// components
import YachtGallery from "./components/yachts/YachtGallery";
// lightbox library

const App = () => (
  <div className="app">
    <div className="page-content">
      {/* loading... */}
      {/* Error Message... */}
      <YachtGallery />
    </div>
  </div>
);

export default App;
