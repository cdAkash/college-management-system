"use client";

import React from "react";

export default function ComputerScience() {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300 mb-8">
        Computer Science Department
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
        The department of Computer Science and Engineering offers an undergraduate engineering degree program since the establishment of the university named 'West Bengal University of Technology' in the year 2001 (now renamed Maulana Abdul Kalam Azad University of Technology,) with a view to offer quality higher education to numerous worthy young fellows as well as to meet the gigantic demand of highly qualified specialists in the field.
        </p>
      </section>

{/* Vision & Mission */}
<section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
  <div className="flex space-x-4">
    <div className="w-1/2">
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">Vision</h3>
      <p className="text-gray-700 dark:text-gray-300">
      To attain a global platform in academics, research and innovation by preparing competent computer engineers to cater for the needs of industry and society at large.
      </p>
    </div>
    <div className="w-1/2">
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">Mission</h3>
      <p className="text-gray-700 dark:text-gray-300">
      To address the dynamic & growing needs of the software industry by creating quality professionals with strong focus on principles of Computer Science and Engineering.
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
        <li>
          <strong>PEO1:</strong> To prepare graduates who will be successful software 
          professionals, academicians, researchers related to computational frameworks, 
          and entrepreneurial pursuit.
        </li>
        <li>
          <strong>PEO2:</strong> To prepare graduates who will achieve peer recognition 
          and adapt to the new technological environment as an individual or in a team, 
          demonstrating good computational, analytical, model designing, and software 
          implementation skills.
        </li>
        <li>
          <strong>PEO3:</strong> To prepare graduates who will thrive to pursue life-long 
          learning for keeping pace with dynamic technological changes through the 
          development of an intuitive computational learning paradigm.
        </li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
        Program Outcomes (POs)
      </h3>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li>
          <strong>PO1 Engineering Knowledge:</strong> Apply the knowledge of mathematics, 
          science, engineering fundamentals, and an engineering specialization to the solution 
          of complex engineering problems.
        </li>
        <li>
          <strong>PO2 Problem Analysis:</strong> Identify, formulate, review research literature, 
          and analyze complex engineering problems reaching substantiated conclusions using first 
          principles of mathematics, natural sciences, and engineering sciences.
        </li>
        <li>
          <strong>PO3 Design/development of solutions:</strong> Design solutions for complex 
          engineering problems and design system components or processes that meet the specified 
          needs with appropriate consideration for public health and safety, and cultural, societal, 
          and environmental considerations.
        </li>
        <li>
          <strong>PO4 Conduct investigations of complex problems:</strong> Use research-based 
          knowledge and research methods including design of experiments, analysis and interpretation 
          of data, and synthesis of the information to provide valid conclusions.
        </li>
        <li>
          <strong>PO5 Modern tool usage:</strong> Create, select, and apply appropriate techniques, 
          resources, and modern engineering and IT tools including prediction and modeling to complex 
          engineering activities with an understanding of the limitations.
        </li>
        <li>
          <strong>PO6 The engineer and society:</strong> Apply reasoning informed by contextual 
          knowledge to assess societal, health, safety, legal, and cultural issues and the consequent 
          responsibilities relevant to professional engineering practice.
        </li>
        <li>
          <strong>PO7 Environment and sustainability:</strong> Understand the impact of professional 
          engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, 
          and need for sustainable development.
        </li>
        <li>
          <strong>PO8 Ethics:</strong> Apply ethical principles and commit to professional ethics and 
          responsibilities and norms of the engineering practice.
        </li>
        <li>
          <strong>PO9 Individual and team work:</strong> Function effectively as an individual, and as a 
          member or leader in diverse teams, and in multidisciplinary settings.
        </li>
        <li>
          <strong>PO10 Communication:</strong> Communicate effectively on complex engineering activities 
          with the engineering community and with society at large, such as, being able to comprehend and 
          write effective reports and design documentation, make effective presentations, and give and 
          receive clear instructions.
        </li>
        <li>
          <strong>PO11 Project management and finance:</strong> Demonstrate knowledge and understanding of 
          engineering and management principles and apply these to one's own work, as a member and leader in 
          a team, to manage projects and in multidisciplinary environments.
        </li>
        <li>
          <strong>PO12 Life-long learning:</strong> Recognize the need for, and have the preparation and 
          ability to engage in independent and life-long learning in the broadest context of technological 
          change.
        </li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
        Program Specific Outcomes (PSOs)
      </h3>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li>
          <strong>PSO1:</strong> Apply the skills of basic science, Discrete Mathematics, probability, 
          principles of electrical and electronics, programming aptitude to develop the self-learning 
          capabilities for the modeling and designing of computing systems in a way of solving complex 
          engineering problems.
        </li>
        <li>
          <strong>PSO2:</strong> Evaluate the solution framework of a complex engineering problem and 
          algorithm by applying the tools and techniques related to computer science to identify the optimal 
          solutions for enriching research & development.
        </li>
        <li>
          <strong>PSO3:</strong> Strengthen the industry-institute partnership and socio-economic framework 
          by enhancing the emerging areas of computer science & engineering for the growing needs of society.
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* HOD Message */}
      <section className="mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 flex justify-center items-center">
            <img
              src="/csehod.png"
              alt="HOD"
              className="w-58 h-58 rounded-lg shadow-lg justify-center"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
            Prof. Subhrapratim Nath, HOD, Asst.Professor [Sr. Grade]
            </h2>
            <p className="text-justify text-gray-700 dark:text-gray-300">
            Greetings! On behalf of the Faculty & Lab Members, Staff, and Students of the Department of Computer Science and Engineering (CSE) at the Meghnad Saha Institute of Technology (MSIT).
    The department prepares undergraduate and post-graduate students for productive careers in industry, academia, and government by providing an excellent environment for teaching & learning in the theory and applications of computing science. Students graduated from this department are employed in different prestigious institutions and organizations home and abroad. A good number of our graduates have completed postgraduate programs including doctoral programs with brilliant performances at highly ranked universities around the world. The department has a good number of young and experienced full-time faculty members with best available exposure to ever-growing horizon of computer science and engineering. Besides, a number of part-time faculties also teach in each semester from other universities, research organizations and industrial establishments for extending experience-rich education.
<br></br>
PROF. SUBHRAPRATIM NATH
<br></br>
HOD, DEPT. OF CSE
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
                  <a href="https://www.makautexam.net/aicte_details/Syllabus/CSE/AllSem23.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">Download</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">M.Tech in CSE</td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">2 Years</td>
                <td className="px-6 py-4">
                  <a href="https://www.makautexam.net/aicte_details/Syllabus/MTECHCSE/AllSem.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">Download</a>
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
        name: "Mr. Subhrapratim Nath (SPN)",
        qualification: "B.Tech + M.Tech, (Submitted) PhD",
        designation: "Assistant Professor & HoD",
        department: "CSE"
      },
      {
        name: "Dr. Chandan Bhattacharya (CKB)",
        qualification: "B.Tech + M.Tech + Ph.D(Engg.)",
        designation: "Professor",
        department: ""
      },
      {
        name: "Mr. Anupam Ghosh (AG)",
        qualification: "MSc + MTech + PhD (Engg.)",
        designation: "Professor",
        department: ""
      },
      {
        name: "Dr. Safikureshi Mondal (SKM)",
        qualification: "B.Tech + M.Tech + Ph.D(Engg.)",
        designation: "Associate Professor",
        department: ""
      },
      {
        name: "Dr. Surama Biswas (SRB)",
        qualification: "AMIE + M.Tech + Ph.D(Engg.)",
        designation: "Associate Professor",
        department: ""
      },
      {
        name: "Dr. Lopamudra Dey (LD)",
        qualification: "B.Tech. + M.Tech + Ph.D.",
        designation: "Associate Professor",
        department: ""
      },
      {
        name: "Mr. Biplab Kumar Barman (BKB)",
        qualification: "B.Tech + M.Tech",
        designation: "Assistant Professor",
        department: ""
      },
      {
        name: "Mr. Sougata Bera (SB)",
        qualification: "B.Tech + M.Tech, Enrolled for PhD",
        designation: "Assistant Professor",
        department: ""
      }
    ].map((faculty, index) => (
      <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {faculty.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{faculty.qualification}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{faculty.designation}</p>
        {faculty.department && (
          <p className="text-sm text-gray-600 dark:text-gray-300">{faculty.department}</p>
        )}
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
        image: "/cse1.jpeg",
        description: "Advanced programming facility with latest development tools",
        equipment: "30 HP Workstations, High-speed Internet"
      },
      {
        name: "Database Lab",
        image: "/cse2.png",
        description: "Dedicated lab for database management and development",
        equipment: "Oracle, MySQL, MongoDB servers"
      },
      {
        name: "Network Lab",
        image: "/cse3.png",
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

      {/* Student Activities with External Links
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
      </section> */}

      {/* News & Announcements Section */}
<section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
    News & Announcements
  </h2>
  <div className="space-y-4">
    {[
      {
        title: "Upcoming Webinar on AI in Education",
        description: "Join us on February 10, 2025, for an insightful webinar discussing the impact of artificial intelligence on modern education. Experts from the field will share their knowledge and experiences.",
        link: "https://example.com/webinar"
      },
      {
        title: "Semester Exam Schedule Released",
        description: "The exam schedule for the Spring 2025 semester has been published. Students are advised to check the academic portal for detailed timings and guidelines.",
        link: "https://example.com/examschedule"
      }
    ].map((announcement, index) => (
      <a 
        key={index}
        href={announcement.link}
        className="block p-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
          {announcement.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {announcement.description}
        </p>
      </a>
    ))}
  </div>
</section>


      {/* Prominent Alumni Section */}
<section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
    Prominent Alumni
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {[
      {
        name: "Prasenjit Ghosh",
        batch: "2007 Pass Out",
        company: "Home Inspector Pro, Canada",
        position: "CTO",
        image: "/cseal1.jpeg"
      },
      {
        name: "Tina Chakroborty",
        batch: "2007 Pass Out",
        company: "Sanofi Canada",
        position: "Data Governance & Data Management Executive, Data & AI",
        image: "/cseal2.jpeg"
      },
      {
        name: "Hasan Zahidi",
        batch: "2017 Pass Out",
        company: "CRED, Bangalore",
        position: "Lead Software Engineer",
        image: "/cseal3.jpg"
      },
      {
        name: "Aishwarya Agrawal",
        batch: "2019 Pass Out",
        company: "Oracle Cloud Infrastructure, Dehradun",
        position: "Technical Staff",
        image: "/cseal4.jpg"
      }
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
            <a href="https://msit.edu.in/assets/images/msit/others/1699716310_Final_PDF_2021-2022.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
              Download Latest Issue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}