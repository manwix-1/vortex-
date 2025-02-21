import EcommerceMetrics from "../../components/portal/EcommerceMetrics";
import MonthlySalesChart from "../../components/portal/MonthlySalesChart";
import StatisticsChart from "../../components/portal/StatisticsChart";
import MonthlyTarget from "../../components/portal/MonthlyTarget";
import RecentOrders from "../../components/portal/RecentOrders";
import DemographicCard from "../../components/portal/DemographicCard";
import PageMeta from "../../components/common/PageMeta";

export default function Admin() {
  return (
    <>
      <PageMeta
        title="Vortex Dashboard"
        description="Automation"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
