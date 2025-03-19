import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, y: -10, delay: 2, duration: 1.2, ease: "power2.out" });
    gsap.to('#tagline', { opacity: 1, y: -10, delay: 3, duration: 1.2, ease: "power2.out" });
    gsap.to('#cta', { opacity: 1, y: -30, delay: 3, duration: 1.5, ease: "power2.out" });
  }, []);


  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
          </p>
        <p id="tagline" className="text-l text-gray-200 opacity-0 mb-6">
          Titanium. So strong. So light. So Pro.
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >

        <a href="#highlights" className="btn" onClick={(e) => {
          e.preventDefault();
          document.querySelector("#highlights")?.scrollIntoView({ behavior: "smooth" });
        }}>
          Buy
        </a>

        <p className="text-white text-lg font-medium tracking-tight">From <span className="font-semibold">$199/month</span> or <span className="font-semibold">$999</span></p>
      </div>
    </section>
  )
}

export default Hero