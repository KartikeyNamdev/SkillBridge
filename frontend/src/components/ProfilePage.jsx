import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
// import { Badge } from './ui/Badge';
import Progress from './ui/Progress';
import { Calendar, Book, BookOpen, Award, Flame } from 'lucide-react';

const ProfilePage = () => {
  // Mock data - replace with actual data from your backend
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "/api/placeholder/100/100",
    streak: 15,
    skillBadges: ["Python", "React", "Node.js", "Data Structures"],
    watchedCourses: [
      { id: 1, title: "Introduction to React", progress: 100 },
      { id: 2, title: "Advanced JavaScript", progress: 75 },
      { id: 3, title: "Data Structures and Algorithms", progress: 50 },
    ],
    appliedInternships: [
      { id: 1, company: "Tech Corp", role: "Frontend Developer", status: "Applied" },
      { id: 2, company: "Data Systems", role: "Data Analyst", status: "Interview" },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <img src={user.avatar} alt={user.name} className="rounded-full w-20 h-20" />
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-orange-500">
            <Flame />
            <span className="font-bold">{user.streak} day streak!</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              Watched Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user.watchedCourses.map((course) => (
              <div key={course.id} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span>{course.title}</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="w-full" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              Applied Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user.appliedInternships.map((internship) => (
              <div key={internship.id} className="mb-4">
                <div className="font-semibold">{internship.company}</div>
                <div className="text-sm text-gray-500">{internship.role}</div>
                {/* <Badge variant="secondary" className="mt-1">{internship.status}</Badge> */}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2" />
              Skill Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
             {/* <div className="flex flex-wrap gap-2"> */}
              {/* {user.skillBadges.map((badge, index) => (
                <Badge key={index} variant="outline">{badge}</Badge>
              ))}  */}
             {/* </div> */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2" />
              Learning Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`w-full pt-full rounded-sm ${
                    Math.random() > 0.5 ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;