import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menubar from "@/components/Menubar";
import DepartmentDetails from "@/components/DepartmentDetails";
import departments from "@/data/departments";

const DepartmentPage = () => {
  const { department } = useParams();
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    console.log("URL parameter changed:", department);
    const dept = departments.find(dept => dept.component.toLowerCase() === department);
    console.log("Selected department:", dept);
    setSelectedDepartment(dept);
  }, [department]);

  return (
    <div className="min-h-screen bg-background">
      <Menubar />
      <div className="container mx-auto px-4 py-8">
        <div className="md:w-3/4 mx-auto">
          {selectedDepartment ? (
            <div className="bg-card rounded-lg shadow-lg">
              <DepartmentDetails component={selectedDepartment.component} />
            </div>
          ) : (
            <div className="bg-card rounded-lg shadow-lg p-8 text-center text-muted-foreground">
              Please select a department to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;