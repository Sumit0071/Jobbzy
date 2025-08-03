import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection.jsx';
import CategoryCarousel from './CategoryCarousel.jsx';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar />

      <section className="w-full bg-white shadow-md">
        <HeroSection />
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Browse by Category</h2>
        <CategoryCarousel />
      </section>

      <section className="container mx-auto px-4 py-12 bg-white shadow-sm rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Latest Jobs</h2>
        <LatestJobs />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
