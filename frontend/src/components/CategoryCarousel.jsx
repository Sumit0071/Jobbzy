import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSerachQuery } from "@/redux/jobSlice";
import { Briefcase, Code, Database, Palette, Layout } from "lucide-react";

const categories = [
  { name: "Frontend Developer", icon: <Layout className="w-4 h-4 mr-1" /> },
  { name: "Backend Developer", icon: <Code className="w-4 h-4 mr-1" /> },
  { name: "Data Science", icon: <Database className="w-4 h-4 mr-1" /> },
  { name: "Graphic Designer", icon: <Palette className="w-4 h-4 mr-1" /> },
  { name: "FullStack Developer", icon: <Briefcase className="w-4 h-4 mr-1" /> },
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = ( query ) => {
    dispatch( setSerachQuery( query ) );
    navigate( "/browse" );
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        🔍 Explore Job Categories
      </h2>

      <Carousel className="w-full max-w-5xl mx-auto px-4">
  <CarouselContent className="-mx-1">
    {categories.map((cat, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-1">
        <div className="flex justify-center">
          <Button
            onClick={() => searchJobHandler(cat.name)}
            variant="outline"
            className="rounded-full border-gray-300 shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-200 px-2 py-3 text-sm font-medium flex items-center"
          >
            {cat.icon}
            {cat.name}
          </Button>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </section>
  );
};

export default CategoryCarousel;
