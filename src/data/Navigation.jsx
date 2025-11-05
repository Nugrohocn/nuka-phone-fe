import {
  LayoutDashboard,
  Settings,
  Smartphone,
  ChartBarBig,
} from "lucide-react";
import Dashboard from "../pages/Dashboard";

// Navigation
const navigation = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard />,
    href: <Dashboard />,
  },
  {
    id: 2,
    title: "Manage Phones",
    icon: <Smartphone />,
    href: "",
  },
  {
    id: 3,
    title: "Analytics",
    icon: <ChartBarBig />,
    href: "",
  },
  {
    id: 4,
    title: "Settings",
    icon: <Settings />,
    href: "",
  },
];

export default navigation;
