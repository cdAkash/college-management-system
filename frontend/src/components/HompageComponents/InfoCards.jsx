"use client";

import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InfoCards() {

  const people = [
    {
      id: 1,
      designation: "Managing Director, \nTechno India Group",
      logo: "/mgd.jpg", 
      image: "/mgd.jpg", 
      name: "Mr. Satyam Roy Chowdhury",
      message:
        "“Somewhere, something incredible is waiting to be known.” These words by astrophysicist and author Carl Sagan have always urged me to wonder there is so much to learn every single day. Knowledge is so plentiful that one lifetime is not enough to know everything, and thus, I advise my students to learn beyond their syllabus. I believe every student has immense potential to excel. In all our colleges, we provide holistic education and ample avenues to connect with the outer world. Meghnad Saha Institute of Technology is designed to be the second home for the students pursuing their dreams here."},
    {
      id: 2,
      designation: "Director, MSIT",
      logo: "/dir.png", 
      image: "/dir.png",
      name: "Prof. ( Dr.) Sukumar Ray Chaudhuri",
      message:
        "I welcome all the students, their parents and stakeholders of Meghnad Saha  Institute of Technology, on behalf of the management, faculty and staff members of this college, bearing the legacy of the great academic conglomerate, Techno India Group. The institute evolved since 2001 with the blessings of visionary academic entrepreneurs Mr. Satyam Roychowdhury and Late Mou Roychowdhury.  Now students get opportunity to build their career in Computer Science, Information Technology, Artificial Intelligence, Data Science, Machine Language, Cyber Security, Internet of Things, Computer Applications, Electronics and Communication, Electrical, Civil and Mechanical Engineering as well as Business Administration at the under-graduate and post-graduate levels.",
    },
    {
      id: 3,
      designation: "Principal, MSIT",
      logo: "/1648322397591.jpeg", 
      image: "/1648322397591.jpeg", 
      name: "Prof. Dr. Tirthankar Datta",
      message:
        "Always optimist, self-confident, excellent organizing ability, keen observer, good analytical power, logical thinker, hard working, entrepreneurship educator, sensitizing innovative projects among students, creative, consistent, competence and truly result oriented.I have a vast experience (25+ years) in academia which includes academic administration, admission of students, teaching, mentoring of students, talent management, handling of E-Cell and facilitated students’ innovative projects (students won prizes in Bengalathon; Texas Instruments and received award from Dr. A P J Abdul Kalam, Honorable Ex President, GOI), branding, budgeting, Accreditation processes (NBA / NAAC), public speaking in TV Channels on education, training & placement of students, building and maintaining relationships with senior level corporate people. I was awarded Best Principal Award for the session 2021-22 from Netaji Subhash Engineering College of all Techno India Colleges and Best Performer Award for the session 2006-07 from Institute of Engineering & Management. ",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {people.map((person) => (
          <HoverCard key={person.id}>
  
            <HoverCardTrigger asChild>
              <Card className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg">
                <img
                  src={person.logo}
                  alt={`${person.designation} Logo`}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                  {person.designation}
                </p>
              </Card>
            </HoverCardTrigger>

            <HoverCardContent
              className="w-80 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            >
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader className="flex items-center">
                  <img
                    src={person.image}
                    alt={`${person.name} Portrait`}
                    className="w-auto h-auto object-cover rounded-md"
                  />
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {person.name}
                    </CardTitle>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {person.designation}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {person.message}
                  </p>
                </CardContent>
              </Card>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

export default InfoCards;
