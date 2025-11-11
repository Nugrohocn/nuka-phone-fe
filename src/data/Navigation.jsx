import {
  LayoutDashboard,
  Settings,
  Smartphone,
  ChartBarBig,
} from "lucide-react";
import Dashboard from "../pages/Dashboard";
import Phone from "../pages/phone/Index";

// Navigation
const navigation = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/",
  },
  {
    id: 2,
    title: "Manage Phones",
    icon: <Smartphone />,
    href: "/phone",
  },
  {
    id: 3,
    title: "Analytics",
    icon: <ChartBarBig />,
    href: "/analytic",
  },
  {
    id: 4,
    title: "Settings",
    icon: <Settings />,
    href: "/setting",
  },
];

export default navigation;
