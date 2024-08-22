import JBFNavbar from "./components/JBFNavbar";
import JBFAdminNavbar from "./components/JBFAdminNavbar";
import JBFFooter from "./components/JBFFooter";
import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === "/admin";

  return (
    <>
      {!isLoginPage && (isAdminRoute ? <JBFAdminNavbar /> : <JBFNavbar />)}
      <RoutesConfig />
      {!isAdminRoute && <JBFFooter />}
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
