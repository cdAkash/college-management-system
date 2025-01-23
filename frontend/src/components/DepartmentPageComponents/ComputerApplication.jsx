"use client";

import React from "react";

export default function ComputerScience() {
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
        he Department is offering the Post Graduate Program – MCA from the year of 2008. This is a full time course approved by AICTE and affiliated to MAKAUT (formerly WBUT).This program aim to focus on the core fundamentals of computer science and related applications. The Department has experienced and highly qualified faculty members. The Department has all the latest technologies of hardware and software with excellent computing facilities for data analysis, program development and research. The Career Development Programs on Communication Skill, Technical Skill, Aptitude Tests, Group Discussions, Personal interview etc. are also provided to the students from the department end. The Department has an excellent academic record of students- Soumili Samanta , a student of MCA topped in the MAKAUT examination and achieved two Gold medals for that in the year of 2016.        </p>
      </section>

{/* Vision & Mission */}
<section className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
  <div className="flex space-x-4">
    <div className="w-1/2">
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">Vision</h3>
      <p className="text-gray-700 dark:text-gray-300">
      To pursue excellence in Computer Science education and research in order to create Computer Application professionals with regional, national, and international competence.      </p>
    </div>
    <div className="w-1/2">
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">Mission</h3>
      <p className="text-gray-700 dark:text-gray-300">
      To develop effective and knowledgeable individuals who can progress science and technology by providing outstanding education in the field of computer application.      </p>
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
          <strong>PEO 01 - Technical Expertise:</strong> Develop the ability to plan, analyze, design, code, implement, test, and maintain software products for real-time systems that are technically sound, economically feasible, and socially acceptable.
        </li>
        <li>
          <strong>PEO 02 - Successful Career:</strong> Exhibit professionalism and ethical attitudes with updated technologies in Computer Application-based careers and demonstrate the capability to set up their own enterprises in various sectors of Computer Applications.
        </li>
        <li>
          <strong>PEO 03 - Soft Skills:</strong> Develop communication skills, teamwork, and leadership qualities in their professional multidisciplinary projects and adapt to current trends through lifelong learning.
        </li>
        <li>
          <strong>PEO 04 - Life Long Learning:</strong> Prepare the students to pursue higher studies by acquiring knowledge in mathematical, computing, and engineering principles in the field of computing and related fields, and to work in teaching and research.
        </li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
        Program Specific Outcomes (PSOs)
      </h3>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li>
          <strong>PSO 01 - Software System Design and Development:</strong> The ability to apply software development life cycle principles to design and develop application software that meets the automation needs of society and industry.
        </li>
        <li>
          <strong>PSO 02 - Computing and Research Ability:</strong> The ability to employ modern computer languages, environments, and platforms to create innovative career paths in SMAC (Social, Mobile, Analytics, and Cloud) technologies.
        </li>
        <li>
          <strong>PSO 03 - Professionalism and Ethics:</strong> Efficient team leaders, effective communicators, and capable of working in multidisciplinary environments while adhering to ethical values.
        </li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">
        Program Outcomes (POs)
      </h3>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li>
          <strong>PO 01 - Engineering Knowledge:</strong> Ability to apply knowledge of computing, science, mathematics, and engineering fundamentals appropriate to the discipline.
        </li>
        <li>
          <strong>PO 02 - Problem Analysis:</strong> Ability to identify, critically analyze, and formulate the computing requirements appropriate to its solution and develop computer applications.
        </li>
        <li>
          <strong>PO 03 - Design/Development of Solutions:</strong> Ability to design, implement, and evaluate a computer-based complex system, process, component, or program to meet desired needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.
        </li>
        <li>
          <strong>PO 04 - Conduct Investigations of Complex Problems:</strong> Use of research-based knowledge and methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions and develop software with complete customer satisfaction.
        </li>
        <li>
          <strong>PO 05 - Modern Tool Usage:</strong> Ability to apply current technologies, skills, and modern IT tools necessary for computing practice with an understanding of the limitations.
        </li>
        <li>
          <strong>PO 06 - The Engineer and Society:</strong> Ability to understand the impact of system solutions in a contemporary, global, economic, environmental, and societal context for sustainable development.
        </li>
        <li>
          <strong>PO 07 - Environment and Sustainability:</strong> Ability to understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate the need for sustainable development.
        </li>
        <li>
          <strong>PO 08 - Ethics:</strong> Ability to discharge their duties with professional and ethical responsibilities as individuals and as part of multidisciplinary teams with a positive attitude.
        </li>
        <li>
          <strong>PO 09 - Individual and Team Work:</strong> Ability to function effectively as an individual and as a team member in diverse and multidisciplinary teams to accomplish a common goal.
        </li>
        <li>
          <strong>PO 10 - Communication:</strong> Ability to communicate effectively with a range of audiences and maintain customer-friendly interactions.
        </li>
        <li>
          <strong>PO 11 - Project Management and Finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s work, as a team member or leader, to manage projects in multidisciplinary environments and ensure economic feasibility.
        </li>
        <li>
          <strong>PO 12 - Life-Long Learning:</strong> Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological changes.
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
              src="/cahod.jpg"
              alt="HOD"
              className="w-58 h-58 rounded-lg shadow-lg justify-center"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
            Aparna Datta, HOD, Asst. Professor and Faculty in Charge
            </h2>
            <p className="text-justify text-gray-700 dark:text-gray-300">
            Welcome to the Department of Computer Applications which was established in the year, 2008. The Department imparts quality and knowledge based technical skills to the graduate  students from various disciplines. The Department has its own independent computer labs with high configuration machines, latest software which fulfills the industrial need of the students. The Department has highly qualified faculties who work as an excellent team and they are involved in a number of research activities. The Department strives to provide a conductive environment for the students to develop analytical and practical skills and apply them to real world problems. The training on recent technologies which are beyond curriculum like Advanced JAVA, JSP, Advanced PHP, Big Data and Python are provided to the students. The alumni of the Department are well placed in academia, government and private sector. The Department has a good number of alumni who are currently placed in senior position in TCS, CTS, IBM, WIPRO, CAPGEMINI, HCL, PWC India, ACCENTURE, AMAZON India and many other top MNC's across the world. We not only make our students academic brilliance but make them excellent human being and a good citizen of India.
<br></br>
Aparna Datta
<br></br>
HOD, DEPT. OF CA
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
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">BCA</td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">4 Years</td>
                <td className="px-6 py-4">
                  <a href="https://www.makautexam.net/aicte_details/Syllabus4/BCA/sem123.pdff" className="text-blue-600 dark:text-blue-400 hover:underline">Download</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">MCA</td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">2 Years</td>
                <td className="px-6 py-4">
                  <a href="https://www.makautexam.net/aicte_details/Syllabus/MCA/sem121.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">Download</a>
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
        image: "/ca1.jpg",
        description: "Advanced programming facility with latest development tools",
        equipment: "30 HP Workstations, High-speed Internet"
      },
      {
        name: "Database Lab",
        image: "/ca2.jpg",
        description: "Dedicated lab for database management and development",
        equipment: "Oracle, MySQL, MongoDB servers"
      },
      {
        name: "Network Lab",
        image: "/btech1.jpg",
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