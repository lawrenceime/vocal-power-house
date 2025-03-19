import React from 'react'

interface Course {
  title: string
  description: string
}

const courses: Course[] = [
  { title: "Types of voiceover", description: "Commercials,narrations, animations, documentary, e-learning, audio books, announcing, promos and lots more" },
  { title: "Voicing and Recording techniques", description: " Vocal health,vocal warm ups and pronunciations" },
  { title: "Script reading and interpretation", description: "Emotion, Pace and context in script reading" },
  { title: "Reading techniques", description: "Home studio setup, microphone techniques and recording software basics" },
  { title: "Demo Preparation", description: "Script writing and selection" },
  { title: "Monetizing your voice as a voiceover artist", description: " Landing your first job" },
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
