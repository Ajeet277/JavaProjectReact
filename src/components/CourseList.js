// CourseList.js
import React from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
  // Dummy data for courses
  const courses = [
    { id: 1, title: 'Course 1', instructor: 'John Doe', price: '$20' },
    { id: 2, title: 'Course 2', instructor: 'Jane Smith', price: '$30' },
    { id: 3, title: 'Course 3', instructor: 'Alex Johnson', price: '$25' },
  ];

  return (
    <div>
      <h3>Available Courses</h3>
      {/* Render course cards */}
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
