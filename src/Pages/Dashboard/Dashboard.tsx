import { useLocation } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardMain from "./DashboardMain";

type Guest = {
  role: string;
  username: string;
  isGuest?: boolean;
};

export default function Dashboard() {
  const location = useLocation();
  const guest = (location.state as { user?: Guest } | undefined)?.user ?? null;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader guest={guest} />
      <DashboardMain guest={guest} />
    </div>
  );
}
