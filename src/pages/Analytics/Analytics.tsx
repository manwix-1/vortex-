import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function Analytics() {
  return (
    <>
      <PageMeta
        title="ANALYTICS | VORTEX"
        description="VORTEX ANALYTICS"
      />
      <PageBreadcrumb pageTitle="VORTEX ANALYTICS" />
      <div className="space-y-6">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
      </div>
    </>
  );
}
