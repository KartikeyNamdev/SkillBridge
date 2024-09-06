/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "./ui/Button";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/Card";
import { Code, BookOpen, Users, ChevronRight } from "lucide-react";
// import { Button } from "./ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-700">SkillBridge</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-indigo-600 hover:text-indigo-800">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/apprenticeship"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Apprenticeship
              </Link>
            </li>
            <li>
              <Link
                to="/practice"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Practice
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Login/Signup
              </Link>
              <Link
                to="/profile"
                
                className="text-indigo-600 hover:text-indigo-800"
              >
                ___Profile
                                        
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Button></Button>
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-indigo-800 mb-4">
            Master Your Coding Skills
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn, practice, and grow with our comprehensive platform
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </section>
        <Button></Button>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 text-indigo-600" />
                Courses
              </CardTitle>
              <CardDescription>Comprehensive learning paths</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Access a wide range of programming courses tailored for
                beginners to advanced developers.
              </p>
              <Button variant="outline" className="flex items-center">
                Explore Courses <ChevronRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 text-indigo-600" />
                Apprenticeship
              </CardTitle>
              <CardDescription>Learn from industry experts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Get hands-on experience and mentorship through our
                apprenticeship programs.
              </p>
              <Button variant="outline" className="flex items-center">
                Join Program <ChevronRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 text-indigo-600" />
                Coding Platform
              </CardTitle>
              <CardDescription>
                Practice and improve your skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Sharpen your coding skills with our LeetCode-style platform
                featuring diverse challenges.
              </p>
              <Button variant="outline" className="flex items-center">
                Start Coding <ChevronRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold text-indigo-800 mb-4">
            Ready to begin your coding journey?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers who have accelerated their careers with
            CodeMaster
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg">
            Sign Up Now
          </Button>
        </section>
      </main>

      <footer className="bg-indigo-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CodeMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
