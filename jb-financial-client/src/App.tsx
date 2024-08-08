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
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import VEF from "./pages/VEF";
import MMF from "./pages/MMF";
import SGF from "./pages/SGF";
import BlogInner from "./pages/BlogInner";
import CareerInner from "./pages/CareerInner";

import Login from "./pages/admin/Login";
import BlogAdmin from "./pages/admin/BlogAdmin";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <JBFNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/funds" element={<OurFunds />} />
          <Route
            path="/private-wealth-management"
            element={<PvtWealthMgmt />}
          />
          <Route
            path="/institutional-wealth-management"
            element={<InsWealthMgmt />}
          />
          <Route path="/private-asset-management" element={<PvtAssetMgmt />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/funds/value-equity-fund" element={<VEF />} />
          <Route path="/funds/money-market-fund" element={<MMF />} />
          <Route path="/funds/short-term-gilt-fund" element={<SGF />} />
          <Route path="/blogs/blog-1" element={<BlogInner />} />
          <Route path="/careers/senior-manager" element={<CareerInner />} />

          {/* Admin */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/blogs" element={<BlogAdmin />} />
        </Routes>
      </Router>
      <JBFFooter></JBFFooter>
    </>
  );
};

export default App;
