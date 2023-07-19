import React from "react";
import PageTitle from "../components/PageTitle";

export default function Home() {
  const loading = false;
  return (
    <div className="top py-3 px-3 mb-5 mb-lg-10">
      <div className="container text-dark">
        <PageTitle loading={loading} title={"Home"} />
        <div className="row gx-xl-5"></div>
      </div>
    </div>
  );
}
