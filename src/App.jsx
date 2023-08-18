import { useEffect } from "react";
import { Routes, Route, useRouteError } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Sales from "./pages/Sales";
import CustomerManagement from "./pages/CustomerManagement";
import TransactionHistory from "./pages/TransactionHistory";
import BookStocks from "./pages/BookStocks";
import AnalyticalReport from "./pages/AnalitycalReport";
import FinancialReport from "./pages/FinancialReport";
import StaffManagementPage from "./pages/Settings";
import NotificationsPage from "./pages/Notifications";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (!session) {
      navigate("/login");
    } else if (session && location.pathname == "/login") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/inventory" element={<BookStocks />} />
        <Route path="/analytical-report" element={<AnalyticalReport />} />
        <Route path="/financial-report" element={<FinancialReport />} />
        <Route path="/staff-management" element={<StaffManagementPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
