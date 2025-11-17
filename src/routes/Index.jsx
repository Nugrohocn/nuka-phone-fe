import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Phone from "../pages/phone/Index";
import Analytic from "../pages/Analytic";
import Setting from "../pages/Setting";
import AddPhone from "../pages/phone/AddPhone";
import DetailPhone from "../pages/phone/DetailPhone";
import EditPhone from "../pages/phone/EditPhone";
import Login from "../pages/auth/Login";

const Index = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="phone">
        <Route index element={<Phone />} />
        <Route path="add-phone" element={<AddPhone />} />
        <Route path=":id" element={<DetailPhone />} />
        <Route path="edit/:id" element={<EditPhone />} />
      </Route>
      <Route path="analytic" element={<Analytic />} />
      <Route path="setting" element={<Setting />} />
    </Route>
  </Routes>
);

export default Index;
