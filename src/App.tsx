import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";

import Admin from "./pages/Dashboard/Admin";
import Browser from "./pages/Browser/Browser";
import Proxies from "./pages/Proxies/Proxies";
import Analytics from "./pages/Analytics/Analytics";


import ApiKey from "./pages/Configuration/ApiKey";
import UserProfiles from "./pages/UserProfiles";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Admin />} />
            <Route path="/browser" element={<Browser />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/proxies" element={<Proxies />} />
            <Route path="/apikey" element={<ApiKey />} />
            {/* user account  */}
            <Route path="/profile" element={<UserProfiles />} />

          </Route>

          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
