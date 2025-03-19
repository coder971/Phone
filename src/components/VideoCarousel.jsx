import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const progressRefs = useRef([]);
  const carouselRef = useRef(null);
  
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Observe carousel visibility to control playback
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsPlaying(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle video playback and progress updates
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      if (progressRefs.current[i]) {
        progressRefs.current[i].style.width = i < currentVideo ? "100%" : "0%";
      }
    });
    
    if (currentVideo < hightlightsSlides.length && isPlaying) {
      const video = videoRefs.current[currentVideo];
      if (video) {
        video.play();
        updateProgress(video, progressRefs.current[currentVideo]);
      }
    } else {
      setCurrentVideo(0);
    }
  }, [currentVideo, isPlaying]);

  // Update progress bar dynamically
  const updateProgress = (video, progressBar) => {
    if (!video || !progressBar) return;
    
    const interval = setInterval(() => {
      if (!video) return clearInterval(interval);
      
      const progress = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${progress}%`;
      
      if (video.ended || progress >= 99.5) clearInterval(interval);
    }, 50);
  };

  return (
    <div className="video-carousel" ref={carouselRef}>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out" 
          style={{ transform: `translateX(-${currentVideo * 100}%)` }}
        >
          {hightlightsSlides.map((slide, i) => (
            <div key={slide.id} className="min-w-full px-4">
              <div className="relative rounded-3xl overflow-hidden bg-black">
                <video
                  ref={el => videoRefs.current[i] = el}
                  muted
                  playsInline
                  className="w-full"
                  onEnded={() => setCurrentVideo(currentVideo + 1)}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
                <div className="absolute top-12 left-[5%] z-10 text-white">
                  {slide.textLists.map((text, j) => (
                    <p key={j} className="md:text-2xl text-xl font-medium">{text}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Progress Indicators */}
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center bg-black rounded-full px-6 py-3">
          {hightlightsSlides.map((_, i) => (
            <div key={i} className="mx-1 cursor-pointer" onClick={() => setCurrentVideo(i)}>
              <div className="w-12 h-3 bg-gray-600 rounded-full overflow-hidden">
                <div ref={el => progressRefs.current[i] = el} className="h-full  bg-gray-400 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;