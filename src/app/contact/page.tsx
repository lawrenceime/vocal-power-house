'use client'
import { useForm, ValidationError } from '@formspree/react';
import { MoveLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import dynamic from 'next/dynamic'
import Image from 'next/image';
import { motion } from 'framer-motion';


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwzeggj");
  const [countries, setCountries] = useState<Option[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>('+1');
  const [phone, setPhone] = useState<string>('');  // State for phone

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  }

  interface Country {
    flags: {
      svg: string;
    };
    name: {
      common: string;
    };
    idd: {
      root?: string;
      suffixes?: string[];
    };
  }

  interface Option {
    label: React.JSX.Element;
    value: string;
  }


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data: Country[] = await res.json();
        const options: Option[] = data.map((country: Country) => ({
          label: (
            <div className="flex items-center">
              <Image src={country.flags?.svg} alt={`${country.name.common} flag`} width={20} height={20} className="w-5 h-3 mr-2 " />
              {`${country.name.common} (+${country.idd?.root || ''}${country.idd?.suffixes?.[0] || ''})`}
            </div>
          ),

          value: `${country.idd?.root || ''}${country.idd?.suffixes?.[0] || ''}`,
        })).filter(option => option.value); // Filter out countries without codes
        setCountries(options);
      } catch (error) {
        console.error('Error fetching country codes:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmitWithCode = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Combine country code + phone number
    const fullPhoneNumber = `${selectedCode}${phone}`;
    formData.set('phone', fullPhoneNumber);  // Replace phone with full number

    // Submit updated form data to Formspree
    handleSubmit(formData as unknown as HTMLFormElement);
  };


  if (state.succeeded) {
    return (
      <>
        <button className="absolute top-3/2 left-2 p-4 bg-white rounded-[50px] w-[50px] h-[50px] text-center mt-5" onClick={handleClick}>
          <MoveLeft color='black' width={24} height={24} />
        </button>
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
          <p className="text-xl text-green-600">Thanks for your submission!</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 p-6 bg-blue-100 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-700">Payment Details</h3>
            <p className="text-sm text-gray-700">Account Name: Mathias Osekwemen Iyoha</p>
            <p className="text-sm text-gray-700">Account Number: 1715807027</p>
            <p className="text-sm text-gray-700">Bank: Access Bank</p>
            <div className='mt-4'>
            <a
              href="https://wa.me/2348133811788" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mt-5 bg-green-500 text-white rounded-lg"
            >
              Notify Us
            </a>
            </div>
          </motion.div>
        <button className='mt-8 font-semibold text-black' onClick={handleClick}>Back To Home page</button>
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen" style={{ backgroundImage: 'url(/assets/emmanuel-ikwuegbu-6BWFAPPWn-8-unsplash.jpg)', }}>
      <form onSubmit={handleSubmitWithCode} className="max-w-2xl mx-auto pt-36 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name Field */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2 text-white font-semibold">
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
            <label htmlFor="lastName" className="mb-2 text-white font-semibold">
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
            <label htmlFor="email" className="mb-2 text-white font-semibold">
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
            <label htmlFor="organization" className="mb-2 text-white font-semibold">
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

          {/* Address Field */}
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-2 text-white font-semibold">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              name="address"
              required
              className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Address" field="address" errors={state.errors} />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-white font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <Select
                options={countries}
                className="w-1/3 mr-2 text-black"
                onChange={(option) => setSelectedCode(option?.value || '+1')}
                placeholder="Code"
              />
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}  // Store phone number in state
                className="border p-2 text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your phone number"
              />
            </div>
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>

          {/* Age Range Field */}
          <div className="flex flex-col">
            <label htmlFor="ageRange" className="mb-2 text-white font-semibold">
              Age Range <span className="text-red-500">*</span>
            </label>
            <select
              id="ageRange"
              name="ageRange"
              required
              className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an age range</option>
              <option value="16-24">16-24</option>
              <option value="25-34">25-34</option>
              <option value="35-40">35-40</option>
              <option value="41-above">41 and above</option>
            </select>
            <ValidationError prefix="Age Range" field="ageRange" errors={state.errors} />
          </div>

          {/* Previous Experience Field */}
          <div className="flex flex-col">
            <label htmlFor="experience" className="mb-2 text-white font-semibold">
              Any Previous Experience? <span className="text-red-500">*</span>
            </label>
            <select
              id="experience"
              name="experience"
              required
              className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <ValidationError prefix="Experience" field="experience" errors={state.errors} />
          </div>

          {/* Specify Experience Field */}
        </div>
        <div className="flex flex-col">
          <label htmlFor="experienceDetails" className="mb-2 text-white font-semibold">
            If yes, please specify
          </label>
          <textarea
            id="experienceDetails"
            name="experienceDetails"
            rows={4}
            className="border p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <ValidationError prefix="Experience Details" field="experienceDetails" errors={state.errors} />
        </div>

        {/* Region Field */}
        <div className="flex flex-col">
          <label htmlFor="region" className="mb-2 text-white font-semibold">
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

        {/* How can we help field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-white font-semibold">
            How can we help you?
          </label>
          <textarea
            id="message"
            name="message"
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
            {state.submitting ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default dynamic(() => Promise.resolve(ContactForm), { ssr: false });