import React, { useEffect, useState } from 'react';

const syllabusData = {
  bba: "https://www.makautexam.net/aicte_details/CourseStructure/MCA21.pdf",
  bca: "https://example.com/path/to/bca_syllabus.pdf",
  mca: "https://example.com/path/to/mca_syllabus.pdf",
  // Add more courses as needed
};

const Syllabus = () => {
  const [course, setCourse] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.course) {
      setCourse(user.course);
      setPdfUrl(syllabusData[user.course.toLowerCase()]);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Syllabus</h1>
      {pdfUrl ? (
        <iframe src={pdfUrl} width="100%" height="700px" title="Syllabus PDF" />
      ) : (
        <p>No syllabus available for the selected course.</p>
      )}
    </div>
  );
};

export default Syllabus;