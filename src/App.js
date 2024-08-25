import './App.css';
import Navbar from './components/Navbar';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseInstanceForm from './components/CourseInstanceForm';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [courses, setCourses] = useState([]);
  // const [instances, setInstances] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // const fetchInstances = async () => {
  //   try {
  //     const response = await axios.get('/api/instances');
  //     setInstances(response.data);
  //   } catch (error) {
  //     console.error('Error fetching instances:', error);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <Navbar />
      <CourseForm />
      <CourseInstanceForm />
      <CourseList courses={courses} fetchCourses={fetchCourses} />
    </div>
  );
}

export default App;
