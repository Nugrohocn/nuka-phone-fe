import { Phone } from "lucide-react";
import Card from "../components/ui/cards/StatsCard";
import { ChartSpline } from "lucide-react";
import { Smartphone } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { CirclePercent } from "lucide-react";
import ActivityCard from "../components/ui/cards/ActivityCard";

const Dashboard = () => {
  const STAT_CARDS = [
    {
      id: 1,
      title: "Total Stok",
      value: "100",
      change: "+12% dari bulan lalu",
      icon: <Smartphone />,
      variant: "stock",
    },
    {
      id: 2,
      title: "Terjual",
      value: "90",
      change: "+8% dari bulan lalu",
      icon: <ChartSpline />,
      variant: "sold",
    },
    {
      id: 3,
      title: "Keuntungan",
      value: "Rp.5 JT",
      change: "+15% dari bulan lalu",
      icon: <CircleDollarSign />,
      variant: "profit",
    },
    {
      id: 4,
      title: "Keuntungan Rata-rata",
      value: "Rp.1 JT",
      change: "+5% dari bulan lalu",
      icon: <CirclePercent />,
      variant: "avg",
    },
  ];

  return (
    <>
      <div className="space-y-8 p-4">
        <div className="flex justify-center gap-6">
          {STAT_CARDS.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              value={card.value}
              change={card.change}
              icon={card.icon}
              variant={card.variant}
            />
          ))}
        </div>
        <div className="flex gap-6">
          <ActivityCard
            id={"1"}
            information={"15 Terjual"}
            price={"Rp. 15.000.000"}
            product={"Iphone 11 Pro Max"}
            title={"Aktivitas Terbaru"}
          />
          <ActivityCard
            id={"1"}
            information={"15 Terjual"}
            price={"Rp. 15.000.000"}
            product={"Iphone 11 Pro Max"}
            title={"Terlaris"}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
