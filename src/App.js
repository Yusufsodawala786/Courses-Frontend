// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchCourses, fetchCourseInstances } from './services/api';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseInstanceForm from './components/CourseInstanceForm';
import CourseInstanceList from './components/CourseInstanceList';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
    };
    loadCourses();
  }, []);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const addInstance = (instance) => {
    setInstances([...instances, instance]);
  };

  const deleteInstance = (id) => {
    setInstances(instances.filter((instance) => instance.id !== id));
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Course Management</h1>
      <CourseForm onAddCourse={addCourse} />
      <CourseList courses={courses} onDeleteCourse={deleteCourse} />
      <CourseInstanceForm onAddInstance={addInstance} />
      <CourseInstanceList instances={instances} onDeleteInstance={deleteInstance} />
    </div>
  );
}

export default App;
