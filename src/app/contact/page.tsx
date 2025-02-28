'use client'
import { useForm, ValidationError } from '@formspree/react';
import { MoveLeft } from 'lucide-react';
import React from 'react';
import {useRouter} from 'next/navigation';
// import HeroSection from './HeroSection';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzeggj");
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/');
  }

  if (state.succeeded) {
    console.log(state);
    
    return (
     <>
     <button className="  absolute top-3/2 left-2 p-4 bg-white rounded-[50px] w-[50px] h-[50px] text-center mt-5" onClick={handleClick}>
        <MoveLeft color='black' width={24} height={24}/>
     </button>
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-green-600">Thanks for your submission! We will be in touch!.</p>
      </div>
     </>
    );
  }

  return (
    <>
      {/* <HeroSection
        title="Contact Us"
        backgroundImage="/contacts.jpeg"
        buttonText={null}
      /> */}
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-36 p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name Field */}
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        </div>

        {/* Last Name Field */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Organization Field */}
        <div className="flex flex-col">
          <label htmlFor="organization" className="mb-2">
            Occupation
          </label>
          <input
            id="organization"
            type="text"
            name="organization"
            className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Organization" field="organization" errors={state.errors} />
        </div>
      </div>

      {/* Region Field */}
      <div className="flex flex-col">
        <label htmlFor="region" className="mb-2">
          Region <span className="text-red-500">*</span>
        </label>
        <select
          id="region"
          name="region"
          required
          className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a region</option>
          <option value="north-america">North America</option>
          <option value="europe">Europe</option>
          <option value="asia-pacific">Asia Pacific</option>
          <option value="latin-america">Latin America</option>
          <option value="africa">Africa</option>
        </select>
        <ValidationError prefix="Region" field="region" errors={state.errors} />
      </div>

      {/* Industry Field */}
      {/* <div className="flex flex-col">
        <label htmlFor="industry" className="mb-2">
          Industry <span className="text-red-500">*</span>
        </label>
        <select
          id="industry"
          name="industry"
          required
          className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an industry</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="education">Education</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="retail">Retail</option>
          <option value="other">Other</option>
        </select>
        <ValidationError prefix="Industry" field="industry" errors={state.errors} />
      </div> */}

      {/* How can we help field */}
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2">
          How can we help you? 
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  </>
  );
}