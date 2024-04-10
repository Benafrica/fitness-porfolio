
"use client"
import * as React from "react"

import Image from "next/image";
import BenNav from "@/components/NavBar/navbar"
import HeroSection from "@/components/herosection/hero";
import Sevices from "@/components/services/sevices";
import Reviews from "@/components/reviews/reviews";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <>
      <BenNav />
      <HeroSection />
      <Sevices/>
      <Reviews/>
      <Footer/>
    </>
  );
}
