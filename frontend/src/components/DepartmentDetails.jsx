import React, { lazy, Suspense, useState, useEffect } from "react";

const DepartmentDetails = ({ component }) => {
  const [DepartmentComponent, setDepartmentComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        console.log("Loading component:", component);
        // Dynamic import with explicit path
        const module = await import(`../components/DepartmentPageComponents/${component}.jsx`);
        console.log("Loaded module:", module);
        setDepartmentComponent(() => module.default);
        setError(null);
      } catch (err) {
        console.error("Error loading component:", err);
        setError(err);
      }
    };

    if (component) {
      loadComponent();
    }
  }, [component]);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading department component. Please try again.
      </div>
    );
  }

  if (!DepartmentComponent) {
    return (
      <div className="p-4">
        <div className="animate-pulse">Loading department details...</div>
      </div>
    );
  }

  return <DepartmentComponent />;
};

export default DepartmentDetails;