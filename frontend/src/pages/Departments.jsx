import React, { useState } from "react";
import Menubar from "@/components/Menubar";
import departments from "@/data/departments";
import DepartmentDetails from "@/components/DepartmentDetails";


const DepartmentPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <div>
      <Menubar />
      <div className="flex items-center justify-center p-4">
        <div className="department-list-container container mx-auto">
          <div className="department-list">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="department-item"
                onClick={() => setSelectedDepartment(dept.component)}
              >
                {dept.name}
              </div>
            ))}
          </div>
          <div className="department-content">
            <DepartmentDetails component={selectedDepartment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;