import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Vocal power house. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-white hover:text-gray-400 text-lg"><FaFacebook /></a>
          <a href="#" className="text-white hover:text-gray-400 text-lg"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-gray-400 text-lg"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-gray-400 text-lg"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
