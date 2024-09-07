import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/button";

const ApprenticeshipPage = () => {
  const apprenticeships = [
    {
      id: 1,
      title: "Frontend Development",
      company: "TechCorp",
      duration: "6 months",
      stipend: "$2000/month",
      color: "bg-blue-100 border-blue-300",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: 2,
      title: "Backend Engineering",
      company: "DataSys",
      duration: "8 months",
      stipend: "$2500/month",
      color: "bg-green-100 border-green-300",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 3,
      title: "Full Stack Development",
      company: "WebWizards",
      duration: "12 months",
      stipend: "$3000/month",
      color: "bg-purple-100 border-purple-300",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
          Apprenticeship Programs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apprenticeships.map((apprenticeship) => (
            <Card key={apprenticeship.id} className={`overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 ${apprenticeship.color} border-2`}>
              <CardHeader className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
                <CardTitle className="text-2xl font-semibold text-gray-800">{apprenticeship.title}</CardTitle>
                <CardDescription className="text-gray-600">{apprenticeship.company}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-medium text-gray-600 mb-2">
                    Duration: <span className="text-gray-800">{apprenticeship.duration}</span>
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    Stipend: <span className="text-gray-800">{apprenticeship.stipend}</span>
                  </span>
                </div>
                <Button className={`w-full ${apprenticeship.buttonColor} text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprenticeshipPage;
