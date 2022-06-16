import "./App.scss";
// components
import YachtGallery from "./components/yachts/YachtGallery";

const App = () => (
  <div className="app page-content">
    {/* loading... */}
    {/* Error Message... */}
    <YachtGallery />
  </div>
);

export default App;
