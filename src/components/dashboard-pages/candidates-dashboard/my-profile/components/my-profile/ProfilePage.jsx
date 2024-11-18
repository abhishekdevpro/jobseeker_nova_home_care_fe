import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const profile = {
    name: "John J.",
    rate: "From €10",
    rateType: "Hourly rate",
    age: "24 years old",
    location: "Ludhiana",
    about: "I am babysitter from the Ludhiana. I can take care of your baby, feed them, play with them.",
    experience: [
      "Newborns (up to 12 months)",
      "Can care for up to 2 children"
    ],
    services: [
      "Pick-up / Drop off"
    ],
    isActive: true
  };

  return (
    <div className="h-auto bg-gray-50 ">
      <Card className="max-w-7xl mx-auto bg-white shadow-sm">
        <CardContent className="p-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Profile Image */}
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-2xl text-gray-600">
              {profile.name.split(' ')[0][0]}
              {profile.name.split(' ')[1][0]}
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">{profile.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-teal-600 font-medium">{profile.rate}</span>
                    <span className="text-gray-500 text-sm">{profile.rateType}</span>
                  </div>
                </div>
                <Link to={'/jobseeker-dashboard/edit-profile'} >
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Edit my profile
                </Button>
                </Link>
              </div>
              
              {profile.isActive && (
                <Badge className="mt-2 bg-green-100 text-green-800 px-2 py-1 text-xs">
                  Active today
                </Badge>
              )}
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <span>{profile.location}</span>
              <span>•</span>
              <span>{profile.age}</span>
            </div>
            <p className="text-gray-700">{profile.about}</p>
          </div>

          {/* Experience Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience caring for</h2>
            <ul className="space-y-2">
              {profile.experience.map((exp, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
            <ul className="space-y-2">
              {profile.services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;