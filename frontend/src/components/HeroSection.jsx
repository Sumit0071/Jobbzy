import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSerachQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero-image.jpg' 
const HeroSection = () => {
  const [query, setQuery] = useState( "" )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchJobHandler = () => {
    dispatch( setSerachQuery( query ) )
    navigate( `/browse` )
  }

  return (
    <div
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: heroImage ? `url(${heroImage})` : 'none',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 text-center px-6 w-full max-w-4xl">
        <span className="px-4 py-2 rounded-full bg-white/80 text-[#F83002] font-medium inline-block mb-4 shadow-md">
          No. 1 Job Hunt Website
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          Search, Apply & <br />
          Get Your <span className="text-[#C89CFF]">Dream Job</span>
        </h1>

        <p className="text-gray-200 mt-4 max-w-xl mx-auto">
          Find thousands of job opportunities across top companies. Search jobs that fit your profile and apply in minutes.
        </p>

        <div className="mt-8 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-full max-w-xl mx-auto shadow-lg">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="flex-1 bg-transparent text-white placeholder-white/80 focus:outline-none px-2"
            onChange={( e ) => setQuery( e.target.value )}
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#6A38C2] hover:bg-[#552ea0] transition"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
