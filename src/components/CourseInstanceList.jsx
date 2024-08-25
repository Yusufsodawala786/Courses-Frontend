// src/components/CourseInstanceList.js
import React, { useState } from 'react';
import { deleteCourseInstance, fetchCourseInstances } from '../services/api';

const CourseInstanceList = ({ instances, onDeleteInstance }) => {
  const handleDelete = async (year, semester, id) => {
    await deleteCourseInstance(year, semester, id);
    onDeleteInstance(id);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-2">Course Instances</h3>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Year</th>
            <th className="border px-4 py-2">Semester</th>
            <th className="border px-4 py-2">Course ID</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance) => (
            <tr key={instance.id}>
              <td className="border px-4 py-2">{instance.year}</td>
              <td className="border px-4 py-2">{instance.semester}</td>
              <td className="border px-4 py-2">{instance.course.id}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(instance.year, instance.semester, instance.id)}
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

export default CourseInstanceList;
