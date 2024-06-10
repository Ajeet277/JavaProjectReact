// CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div>
      <h4>{course.title}</h4>
      <p>Instructor: {course.instructor}</p>
      <p>Price: {course.price}</p>
      {/* Button to enroll in the course */}
      <button>Enroll</button>
    </div>
  );
}

export default CourseCard;
