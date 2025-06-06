import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import CourseDetailPage from "./Pages/CourseDetailPage";
import BlogsPage from "./Pages/BlogsPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import ScrollToTop from "./Components/ScrollToTop";
import LessonsPage from "./Pages/Lesson";

const App = () => {
  return (
    <main >
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Navigate to={'/#aboutt'}/>} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
