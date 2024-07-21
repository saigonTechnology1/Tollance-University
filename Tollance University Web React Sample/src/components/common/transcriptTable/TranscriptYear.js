import React from "react";
import CourseRow from "./CourseRow";

export default function TranscriptYear({ year, courses }) {
  return (
    <>
      <tr>
        <td
          colSpan={courses.length}
          className="table-secondary text-center font-weight-bold"
        >
          {year}
        </td>
      </tr>
      {courses.map((course, index) => (
        <CourseRow key={index} course={course} />
      ))}
    </>
  );
}
