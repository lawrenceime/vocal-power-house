import Image from "next/image";
import Hero from "@/components/Hero";
import AboutUs from "@/components/About";
import CourseCards from "@/components/Courses";

export default function Home() {
  return (
    <div>
    <Hero/>
    <CourseCards/>
    </div>
  );
}
