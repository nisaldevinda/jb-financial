import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import JBFNavbar from "./components/JBFNavbar";
import JBFAdminNavbar from "./components/JBFAdminNavbar";
import JBFFooter from "./components/JBFFooter";
import RoutesConfig from "./routes/RoutesConfig";
import LoadingSpinner from "./components/LoadingSpinner"; // Import your loading spinner
import "./App.css";

const AppContent: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Check if the route is an admin route or the login page
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === "/admin";

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleStart(); // Trigger loading on route change

    // Mimic a network request with a setTimeout
    const timeoutId = setTimeout(() => {
      handleComplete();
    }, 300); // Adjust the timeout to match the desired loading duration

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      {/* Show the loading spinner when isLoading is true */}
      {isLoading && <LoadingSpinner />}
      {/* Conditionally render the appropriate navbar */}
      {!isLoginPage && (isAdminRoute ? <JBFAdminNavbar /> : <JBFNavbar />)}
      {/* Render the main routes */}
      <RoutesConfig />
      {/* Conditionally render the footer */}
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
