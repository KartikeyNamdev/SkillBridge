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

const ApprenticeshipPage = () => {
  const apprenticeships = [
    {
      id: 1,
      title: "Frontend Development",
      company: "TechCorp",
      duration: "6 months",
      stipend: "$2000/month",
    },
    {
      id: 2,
      title: "Backend Engineering",
      company: "DataSys",
      duration: "8 months",
      stipend: "$2500/month",
    },
    {
      id: 3,
      title: "Full Stack Development",
      company: "WebWizards",
      duration: "12 months",
      stipend: "$3000/month",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Apprenticeship Programs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apprenticeships.map((apprenticeship) => (
          <Card key={apprenticeship.id}>
            <CardHeader>
              <CardTitle>{apprenticeship.title}</CardTitle>
              <CardDescription>{apprenticeship.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <strong>Duration:</strong> {apprenticeship.duration}
              </p>
              <p className="mb-4">
                <strong>Stipend:</strong> {apprenticeship.stipend}
              </p>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApprenticeshipPage;
