// Components
import JBFNavbar from "./components/JBFNavbar";
import JBFFooter from "./components/JBFFooter";
import "./App.css";

//Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import OurFunds from "./pages/OurFunds";
import PvtWealthMgmt from "./pages/PvtWealthMgmt";
import InsWealthMgmt from "./pages/InsWealthMgmt";
import PvtAssetMgmt from "./pages/PvtAssetMgmt";

const App: React.FC = () => {
  return (
    <>
      <JBFNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-funds" element={<OurFunds />} />
          <Route
            path="/private-wealth-management"
            element={<PvtWealthMgmt />}
          />
          <Route
            path="/institutional-wealth-management"
            element={<InsWealthMgmt />}
          />
          <Route path="/private-asset-management" element={<PvtAssetMgmt />} />
        </Routes>
      </Router>
      <JBFFooter></JBFFooter>
    </>
  );
};

export default App;
