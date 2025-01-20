"use client";

import React from "react";

export default function ComputerApplication() {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300 mb-8">
        Computer Application Department
      </h1>

      {/* Department Image */}
      <div className="w-full mb-6">
        <img
          src="/b.jpg"
          alt="Computer Science Department"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          About
        </h2>
        <p className="text-justify text-gray-700 dark:text-gray-300">
          The Department of Computer Science and Engineering was established in 2005...
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Vision & Mission
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be a center of excellence in Computer Science and Engineering...
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To provide quality education in Computer Science and Engineering...
            </p>
          </div>
        </div>
      </section>

      {/* PEO, PO & PSO */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          PEO, PO & PSO
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
              Program Educational Objectives (PEOs)
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>PEO 1: Technical Competency...</li>
              <li>PEO 2: Professional Success...</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
              Program Outcomes (POs)
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>PO 1: Engineering Knowledge...</li>
              <li>PO 2: Problem Analysis...</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
              Program Specific Outcomes (PSOs)
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>PSO 1: Software Development...</li>
              <li>PSO 2: System Integration...</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 flex justify-center items-center">
            <img
              src="/mgd.jpg"
              alt="HOD"
              className="w-58 h-58 rounded-lg shadow-lg justify-center"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
              HOD Message
            </h2>
            <p className="text-justify text-gray-700 dark:text-gray-300">
              Welcome to the Department of Computer Science and Engineering...
            </p>
          </div>
        </div>
      </section>

      {/* Course & Syllabus */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Courses & Syllabus
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-gray-800 dark:text-gray-300">Course</th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-gray-800 dark:text-gray-300">Duration</th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-gray-800 dark:text-gray-300">Syllabus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">B.Tech in CSE</td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">4 Years</td>
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Faculty List Section */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Faculty List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              name: "Dr. John Doe",
              designation: "Professor & HOD",
              image: "/faculty1.jpg",
              specialization: "Machine Learning",
              email: "john.doe@college.edu"
            },
            { 
              name: "Dr. Jane Smith",
              designation: "Associate Professor",
              image: "/faculty2.jpg",
              specialization: "Data Science",
              email: "jane.smith@college.edu"
            },
            { 
              name: "Dr. John Doe",
              designation: "Professor & HOD",
              image: "/faculty1.jpg",
              specialization: "Machine Learning",
              email: "john.doe@college.edu"
            },
            { 
              name: "Dr. John Doe",
              designation: "Professor & HOD",
              image: "/faculty1.jpg",
              specialization: "Machine Learning",
              email: "john.doe@college.edu"
            },
            { 
              name: "Dr. John Doe",
              designation: "Professor & HOD",
              image: "/faculty1.jpg",
              specialization: "Machine Learning",
              email: "john.doe@college.edu"
            },{ 
              name: "Dr. John Doe",
              designation: "Professor & HOD",
              image: "/faculty1.jpg",
              specialization: "Machine Learning",
              email: "john.doe@college.edu"
            },
            // Add more faculty members...
          ].map((faculty, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
              <div className="flex flex-col items-center">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
                  {faculty.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-1">
                  {faculty.designation}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-1">
                  {faculty.specialization}
                </p>
                <a 
                  href={`mailto:${faculty.email}`}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {faculty.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Facilities */}
<section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
    Lab & Other Facilities
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Changed from grid-cols-4 to grid-cols-3 and increased gap */}
    {[
      {
        name: "Programming Lab",
        image: "/lab1.jpg",
        description: "Advanced programming facility with latest development tools",
        equipment: "30 HP Workstations, High-speed Internet"
      },
      {
        name: "Database Lab",
        image: "/lab2.jpg",
        description: "Dedicated lab for database management and development",
        equipment: "Oracle, MySQL, MongoDB servers"
      },
      {
        name: "Network Lab",
        image: "/lab3.jpg",
        description: "State-of-the-art networking infrastructure",
        equipment: "Cisco Routers, Switches, Network Analyzers"
      }
    ].map((lab, index) => (
      <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <img 
          src={lab.image} 
          alt={lab.name} 
          className="w-full h-56 object-cover" /* Increased height for better visibility */
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {lab.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {lab.description}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium">Equipment:</span> {lab.equipment}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Student Activities with External Links */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Student Chapter & Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "IEEE Student Branch", link: "#" },
            { title: "ACM Chapter", link: "#" },
            { title: "Coding Club", link: "#" },
            { title: "Research Group", link: "#" }
          ].map((activity, index) => (
            <a 
              key={index}
              href={activity.link}
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">{activity.title}</h3>
              <span className="text-blue-600 dark:text-blue-400 text-sm">Learn more →</span>
            </a>
          ))}
        </div>
      </section>

      {/* News & Announcements with External Links */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          News & Announcements
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <a 
              key={item}
              href="#"
              className="block p-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Announcement {item}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Brief description...</p>
              <span className="text-blue-600 dark:text-blue-400 text-sm">Read more →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Prominent Alumni
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Alice Johnson",
              batch: "2018",
              company: "Google",
              position: "Senior Software Engineer",
              image: "/alumni1.jpg"
            },
            {
              name: "Bob Wilson",
              batch: "2019",
              company: "Microsoft",
              position: "Product Manager",
              image: "/alumni2.jpg"
            },
            {
              name: "Bob Wilson",
              batch: "2019",
              company: "Microsoft",
              position: "Product Manager",
              image: "/alumni2.jpg"
            },
            {
              name: "Bob Wilson",
              batch: "2019",
              company: "Microsoft",
              position: "Product Manager",
              image: "/alumni2.jpg"
            },
            {
              name: "Bob Wilson",
              batch: "2019",
              company: "Microsoft",
              position: "Product Manager",
              image: "/alumni2.jpg"
            },{
              name: "Bob Wilson",
              batch: "2019",
              company: "Microsoft",
              position: "Product Manager",
              image: "/alumni2.jpg"
            },
            // Add more alumni...
          ].map((alumni, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
              <div className="flex flex-col items-center">
                <img 
                  src={alumni.image} 
                  alt={alumni.name}
                  className="w-20 h-20 rounded-full object-cover mb-2"
                />
                <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 text-center">
                  {alumni.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-1">
                  {alumni.position}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {alumni.company} ({alumni.batch})
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Magazine Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
          Department Magazine
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="text-center">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Download Latest Issue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}