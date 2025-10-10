"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import ClientReview from './ClientReview/ClientReview'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Skills />
      <Projects />
      <ClientReview />
      <Contact />
    </div>
  )
}

export default Home