import React from "react";

function CourseRow({ course }) {
  return (
    <tr>
      <td>{course.term}</td>
      <td>{course.code}</td>
      <td>{course.title}</td>
      <td>{course.grade}</td>
      <td>{course.credits}</td>
    </tr>
  );
}

export default CourseRow;
