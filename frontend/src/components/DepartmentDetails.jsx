import React, { lazy, Suspense } from "react";

const DepartmentDetails = ({ component }) => {
  if (!component) return null;

  const Component = lazy(() => import(`./DepartmentPageComponents/${component}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default DepartmentDetails;