import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function Browser() {
  return (
    <div>
      <PageMeta
        title="BROWSER PROFILE | VORTEX"
        description="VORTEX"
      />
      <PageBreadcrumb pageTitle="BROWSER PROFILE" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
