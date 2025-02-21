import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BasicTableOne from "../../components/tables/BasicTableOne";
import PageMeta from "../../components/common/PageMeta";

export default function ApiKey() {
  return (
    <>
      <PageMeta
        title="VORTEX Dashboard | APIKEY"
        description="Admin Dashboard"
      />
      <PageBreadcrumb pageTitle="APIKEY" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
