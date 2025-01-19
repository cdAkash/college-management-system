import React, { useEffect, useState } from 'react';

const Papers = () => {
  const [course, setCourse] = useState('');
  const [paperUrl, setPaperUrl] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.course) {
      setCourse(user.course);
      setPaperUrl(`https://www.makaut.com/${user.course.toLowerCase()}.html#list`);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Previous Papers</h1>
      {paperUrl ? (
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Click here to view previous papers for {course.toUpperCase()}
        </a>
      ) : (
        <p>No previous papers available for the selected course.</p>
      )}
    </div>
  );
};

export default Papers;