import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";

import FeaturesSection from "@/components/landing/FeaturesSection";
import CurriculumSection from "@/components/landing/CurriculumSection";
import WhoShouldJoin from "@/components/landing/WhoShouldJoin";
import CourseStructure from "@/components/landing/CourseStructure";

import PlacementsSection from "@/components/landing/PlacementsSection";
import GallerySection from "@/components/landing/GallerySection";
import BottomCallBar from "@/components/landing/BottomCallBar";
import CourseSection from "@/components/landing/CourseSection";



const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
    
      <FeaturesSection />
      <CurriculumSection />
      <WhoShouldJoin />
      <CourseStructure />
      <CourseSection />
      <PlacementsSection />
      <GallerySection />
      <BottomCallBar />

      
     
    </div>
  );
};

export default Index;
