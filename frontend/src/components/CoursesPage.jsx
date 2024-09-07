import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/button";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Basic Math Skills",
      description: "Fundamental arithmetic and problem-solving",
      level: "Elementary",
      duration: "8 weeks",
      color: "bg-yellow-100 border-yellow-300",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      educationLevel: "Elementary Education",
    },
    {
      id: 2,
      title: "Introduction to Science",
      description: "Exploring the natural world through experiments",
      level: "Elementary",
      duration: "10 weeks",
      color: "bg-green-100 border-green-300",
      buttonColor: "bg-green-500 hover:bg-green-600",
      educationLevel: "Elementary Education",
    },
    {
      id: 3,
      title: "World History",
      description: "Overview of major historical events and civilizations",
      level: "Secondary",
      duration: "12 weeks",
      color: "bg-blue-100 border-blue-300",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      educationLevel: "Secondary Education",
    },
    {
      id: 4,
      title: "Advanced Biology",
      description: "In-depth study of cellular and molecular biology",
      level: "Secondary",
      duration: "16 weeks",
      color: "bg-purple-100 border-purple-300",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      educationLevel: "Secondary Education",
    },
    {
      id: 5,
      title: "Introduction to Psychology",
      description: "Fundamentals of human behavior and mental processes",
      level: "College",
      duration: "14 weeks",
      color: "bg-red-100 border-red-300",
      buttonColor: "bg-red-500 hover:bg-red-600",
      educationLevel: "College Level",
    },
    {
      id: 6,
      title: "Data Structures and Algorithms",
      description: "Advanced computer science concepts",
      level: "College",
      duration: "16 weeks",
      color: "bg-indigo-100 border-indigo-300",
      buttonColor: "bg-indigo-500 hover:bg-indigo-600",
      educationLevel: "College Level",
    },
  ];

  const educationLevels = ["Elementary Education", "Secondary Education", "College Level"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
          Our Courses
        </h1>
        {educationLevels.map((level) => (
          <div key={level} className="mb-12">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">{level}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses
                .filter((course) => course.educationLevel === level)
                .map((course) => (
                  <Card key={course.id} className={`overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 ${course.color} border-2`}>
                    <CardHeader className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
                      <CardTitle className="text-2xl font-semibold text-gray-800">{course.title}</CardTitle>
                      <CardDescription className="text-gray-600">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium text-gray-600">
                          Level: <span className="text-gray-800">{course.level}</span>
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                          Duration: <span className="text-gray-800">{course.duration}</span>
                        </span>
                      </div>
                      <Button className={`w-full ${course.buttonColor} text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}>
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;