import AssignmnetOffers from "@/components/home/AssignmnetOffers";
import Cta1 from "@/components/home/Cta1";
import Cta2 from "@/components/home/Cta2";
import Cta3 from "@/components/home/Cta3";
import Cta4 from "@/components/home/Cta4";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Lookingfor from "@/components/home/Lookingfor";
import Reviews from "@/components/home/Reviews";
import UniversitySlider from "@/components/home/UniversitySlider";
import WhyUs from "@/components/home/WhyUs";
import Working from "@/components/home/Working";


const page = () => {
  return (
    <>
    <Hero />
    <UniversitySlider />
    <AssignmnetOffers />
    <Cta1 />
    <Features />
    <Working />
    <Reviews />
    <Lookingfor />
    <Cta2 />
    <WhyUs />
    <Cta3 />
    <Faq />
    <Cta4 />
    </>
  )
}

export default page
