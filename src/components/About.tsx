import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          At <span className="font-semibold">Laym Tech</span>, we are passionate about building innovative 
          software solutions that empower businesses and individuals. Our team of skilled developers 
          and designers work together to create cutting-edge applications tailored to meet diverse needs.
        </p>
      </div>

      <div className="max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600">
          We aim to simplify technology for businesses by delivering user-friendly, scalable, 
          and efficient software solutions. Through Laym Academy, we also train aspiring developers, 
          equipping them with the skills to thrive in the tech industry.
        </p>
      </div>

      <div className="max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Experienced and dedicated team</li>
          <li>Custom solutions tailored to your needs</li>
          <li>Commitment to innovation and excellence</li>
          <li>Empowering the next generation of tech leaders</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs
