import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Phone from "../pages/phone/Index";
import Analytic from "../pages/Analytic";
import Setting from "../pages/Setting";
import AddPhone from "../pages/phone/AddPhone";
import DetailPhone from "../pages/phone/DetailPhone";

const Index = () => (
  <Routes>
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="phone">
        <Route index element={<Phone />} />
        <Route path="add-phone" element={<AddPhone />} />
        <Route path=":id" element={<DetailPhone />} />
      </Route>
      <Route path="analytic" element={<Analytic />} />
      <Route path="setting" element={<Setting />} />
    </Route>
  </Routes>
);

export default Index;
