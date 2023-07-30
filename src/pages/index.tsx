import Head from 'next/head';
import Navigation from '@/components/Navigation';
import { motion, useScroll, useSpring } from "framer-motion";
import Showcase from '@/components/Showcase';
import styled from 'styled-components';
import CursorFollower from '@/components/CursorFollower';
import FixedElements from '@/components/SocialFixed';
import EllipseSecond from '@/components/Second_Elp';
import About from '@/components/About';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Projects from '@/components/Projects';
import Works from '@/components/Works';
import { useState } from 'react';
import Ellipse from '@/components/Ellipse';
import Contact from '@/components/Contact';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const Layout = styled.div `
    opacity: 1;
  `

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const smoothScroll = () => {
        const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

        let currentScroll = 0;
        let targetScroll = 0;
        let ease = 0.03;

        const setBodyHeight = () => {
          document.body.style.height = `${scrollContainer.scrollHeight}px`;
        };

        const smoothScrolling = () => {
          targetScroll = window.scrollY;
          currentScroll = lerp(currentScroll, targetScroll, ease);
          scrollContainer.style.transform = `translate3d(0, -${currentScroll}px, 0)`;
          requestAnimationFrame(smoothScrolling);
        };

        setBodyHeight();
        window.addEventListener("resize", setBodyHeight);
        smoothScrolling();
      };

      smoothScroll();
    }
  }, []);

  interface HomeProps {
    data: any; 
    id: string;
  }



  return (
    <Layout>
      <Head>
        <title>Ramazan Azimli | Frontend UI Developer</title>
        <meta name="description" content="Ramazan Azimli | When you build in silence people don't know what to attack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Gemunu+Libre&family=Josefin+Sans&family=Jost:wght@500&family=Lexend:wght@400;500;800&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+KR&family=Open+Sans:wght@400;500;600&family=Oxygen&family=Plus+Jakarta+Sans:wght@800&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&family=Prompt&family=Questrial&family=Quicksand:wght@600&family=Roboto+Mono:wght@400;500;700&family=Roboto+Slab:wght@400;500&family=Tilt+Warp&family=Titillium+Web&display=swap" rel="stylesheet" />
        <link
         rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
         />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&f[]=author@500,600,700&f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=excon@900,700,500&f[]=chillax@600,700&f[]=nippo@700&f[]=work-sans@800,600,700,601&f[]=red-hat-display@800,900,700&f[]=clash-display@700,600&f[]=poppins@900,500,800,700,600&f[]=clash-grotesk@700,600&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navigation/>
     <Ellipse/>
     <EllipseSecond/>
     <motion.div className="progress-bar" style={{ scaleX }} />
     <CursorFollower size={35} color="rgba(0,0,0,0)" />
     <FixedElements/>
      <main ref={scrollContainerRef} style={{ position: "fixed", width: "100%", top: 0, left: 0 }}>
     <Showcase/>
     <About/>
     <Projects/>
     <Works/>
     <Contact/>
      </main>
    </Layout>
  )
}
export default Home;
