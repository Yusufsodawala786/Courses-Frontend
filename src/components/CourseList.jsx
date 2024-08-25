import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = (props) => {
  useEffect(() => {
    props.fetchCourses();
  }, []);

  const deleteCourse = async (id) => {
    await axios.delete(`/api/courses/${id}`);
    props.fetchCourses();
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.code}</td>
            <td>
              <button onClick={() => deleteCourse(course.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
