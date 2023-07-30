import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import MainLogo from "../../logo";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { CgFileDocument } from 'react-icons/cg';
import { BsPlay } from 'react-icons/bs';

const Nav = styled.nav `
position: fixed;
  top: 0;
  left: 0;
  translate: 0 -105px;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0,0,0,0);
  gap: 20px;
  width: 100%;
  height: 100px;
  transition: all 0.4s ease-out;

  .visible {
    top: 0;
  translate: 0;
  backdrop-filter: blur(10px);
  }
  @media only screen and (max-width: 800px) {
  padding: 0 2rem;
  backdrop-filter: blur(10px);
  height: 90px;
  }
`
const ResumeSection = styled.div `
  vertical-align: center;
  display: none;

  svg {
    color: var(--var-color-component-white);
    font-size: 35px;
    transition: all 0.3s ease-out;

    &:hover {
    color: var(--var-color-component-primary);
    transition: all 0.3s ease-out;
    }
  }

  @media only screen and (max-width: 800px) {
    display: inline-block;
  }

  button {
    background: none;
    border: none;

    svg {
    font-size: 42px;
    margin-right: 4px;
    margin-top: -7px;
    vertical-align: bottom;
    }
  }
`
const BetaTitle = styled.h4 `
  padding: 1px 5px;
  background: var(--var-color-component-primary);
  color: var(--var-color-component-black);
  display: inline-block;
  vertical-align: top;
  margin-top: 32px;
  margin-left: 6px;
  border-radius: 5px;
  font-family: 'General Sans',sans-serif;
  font-weight: bold;
  filter: drop-shadow(0 0 0.9rem var(--var-color-component-primary));


 
`
const LogoCaption = styled.div `
   vertical-align: middle;

   svg {
    width: 80px;
    @media only screen and (max-width: 800px)  {
      width: 65px;
     }
   }
`
const NavLinks = styled.div `
  vertical-align: middle;

  a {
    text-decoration: none;
    color: inherit;
    margin: 0.75rem 1.55rem;
    font-size: 21px;
    color: var(--var-color-component-white);
    font-family: General Sans,sans-serif;
    font-weight: 700;
    transition: all .3s ease;

    &:hover {
        color: var(--var-color-component-primary);
        filter: drop-shadow(0 0 0.75rem var(--var-color-component-primary));
    }

    &:last-child {
      background: transparent;
      border: none;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      padding: 0.5em 0.9em;
      color: var(--var-color-component-white);
      border-bottom: 2px solid var(--var-color-component-primary);
      color: var(--var-color-component-white);
      position: relative;
      transition: .5s ease;


      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 0;
        background-color: var(--var-color-component-primary);
        transition: .5s ease;
      }
      &:hover {
        color: #1e1e2b;
        transition-delay: .5s;
      }
      &:hover::before {
        width: 100%;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background-color: var(--var-color-component-primary);
        transition: .4s ease;
        z-index: -1;
      }
      &:hover::after {
        height: 100%;
        transition-delay: 0.4s;
        color: var(--var-color-component-white);
      }
    }
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

interface MusicPlayerProps {
  musicUrl: string;
}


const Navigation = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const musicUrl = 'https://audio.jukehost.co.uk/VXEku0rDajT7KltCaY5XgVqYGg6EGRxS';

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
      <Nav className={`${isNavbarVisible ? "visible" : ""} ${isScrolled ? 'scrolled' : ''}`}>
        <Fade delay={4200} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
          <Link href="#">
          <LogoCaption>
            <MainLogo/>
            <BetaTitle>V3</BetaTitle>
        </LogoCaption>
          </Link>
        </Fade>
        <Fade delay={4600} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
        <NavLinks>
          <Link href="#about">About</Link>
          <a href="#projects">Projects</a>
          <Link href="#works">Works</Link>
          <Link href="#contact">Contact</Link>
          <Link href="https://drive.google.com/file/d/1wusjgbOyPZ9bMNk_Pun0l-yglmfc8wkw/view?usp=sharing" target="_blank">Resume</Link>
        </NavLinks>
        </Fade>
        <ResumeSection>
        <button onClick={handlePlayMusic} >
          <BsPlay/>
          <audio ref={audioRef} src={musicUrl} />
         </button>
         <Link href="https://drive.google.com/file/d/1wusjgbOyPZ9bMNk_Pun0l-yglmfc8wkw/view?usp=sharing" target="_blank">
         <CgFileDocument/>
         </Link>
        </ResumeSection>
      </Nav>
  );
};
export default Navigation;
