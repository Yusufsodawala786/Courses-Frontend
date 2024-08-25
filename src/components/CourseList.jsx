// src/components/CourseList.js
import React from 'react';
import { deleteCourse } from '../services/api';

const CourseList = ({ courses, onDeleteCourse }) => {
  const handleDelete = async (id) => {
    await deleteCourse(id);
    onDeleteCourse(id);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-2">Courses</h3>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Code</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border px-4 py-2">{course.title}</td>
              <td className="border px-4 py-2">{course.courseCode}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
