// src/services/api.js
const API_BASE_URL = 'http://localhost:8080/api';

export const fetchCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/courses`);
  return response.json();
};

export const createCourse = async (course) => {
  const response = await fetch(`${API_BASE_URL}/courses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  });
  return response.json();
};

export const deleteCourse = async (id) => {
  await fetch(`${API_BASE_URL}/courses/${id}`, {
    method: 'DELETE',
  });
};

export const fetchCourseInstances = async (year, semester) => {
  const response = await fetch(`${API_BASE_URL}/instances/${year}/${semester}`);
  return response.json();
};

export const createCourseInstance = async (instance) => {
  const response = await fetch(`${API_BASE_URL}/instances`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(instance),
  });
  return response.json();
};

export const deleteCourseInstance = async (year, semester, id) => {
  await fetch(`${API_BASE_URL}/instances/${year}/${semester}/${id}`, {
    method: 'DELETE',
  });
};
