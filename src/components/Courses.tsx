import React from 'react'

interface Course {
  title: string
  description: string
}

const courses: Course[] = [
  { title: "Introduction to Voice Acting", description: "Learn the basics of voice-over work, including vocal techniques and script reading." },
  { title: "Commercial Voice-Over", description: "Master the skills needed for radio, TV, and online commercial voice-overs." },
  { title: "Narration & Storytelling", description: "Develop techniques for audiobook narration, documentaries, and storytelling." },
  { title: "Character Voice Acting", description: "Learn how to create unique character voices for animation, video games, and more." },
  { title: "Dubbing & ADR", description: "Understand the art of dubbing for films, TV shows, and animated content." },
  { title: "Home Studio Setup", description: "Set up your own professional-quality voice-over recording space." },
]

const CourseCards = () => {
  return (
    <div className="w-full   py-16 px-6 mt-[200px]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Voice-Over Training Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseCards
