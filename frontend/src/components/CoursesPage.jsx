/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming",
      level: "Beginner",
      duration: "4 weeks",
    },
    {
      id: 2,
      title: "Web Development with React",
      description: "Build modern web applications with React",
      level: "Intermediate",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      description: "Master fundamental computer science concepts",
      level: "Advanced",
      duration: "8 weeks",
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description: "Get started with machine learning and AI",
      level: "Intermediate",
      duration: "10 weeks",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <strong>Level:</strong> {course.level}
              </p>
              <p className="mb-4">
                <strong>Duration:</strong> {course.duration}
              </p>
              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
