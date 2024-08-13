// Components
import JBFNavbar from "./components/JBFNavbar";
import JBFAdminNavbar from "./components/JBFAdminNavbar";
import JBFFooter from "./components/JBFFooter";
import "./App.css";

// Routes
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <JBFAdminNavbar /> : <JBFNavbar />}
      <RoutesConfig />
      <JBFFooter />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
