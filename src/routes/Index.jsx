import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

const Index = () => (
  <Routes>
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      {/* <Route path="phone" element={<ManagePhone />} /> */}
    </Route>
  </Routes>
);

export default Index;
