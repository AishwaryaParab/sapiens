"use client";
import { useBelowBreakpoint } from "@/hooks/use-below-breakpoint";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const Main = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useBelowBreakpoint(480);

  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  useEffect(() => {
    const currentVideo = currentVideoRef.current;
    if (!currentVideo) return;

    const handleTimeUpdate = () => {
      // Start preloading and transitioning 0.5s before end
      if (
        currentVideo.duration - currentVideo.currentTime < 0.5 &&
        !isTransitioning
      ) {
        setIsTransitioning(true);

        // Start playing next video
        const nextVideo = nextVideoRef.current;
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch((err) => console.error("Play error:", err));
        }
      }
    };

    const handleEnded = () => {
      // Swap videos
      setCurrentIdx(nextIdx);
      setNextIdx((nextIdx + 1) % videos.length);
      setIsTransitioning(false);
    };

    currentVideo.addEventListener("timeupdate", handleTimeUpdate);
    currentVideo.addEventListener("ended", handleEnded);

    return () => {
      currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [currentIdx, nextIdx, isTransitioning, videos.length]);

  // Preload next video when current changes
  useEffect(() => {
    const nextVideo = nextVideoRef.current;
    if (nextVideo) {
      nextVideo.load();
    }
  }, [nextIdx]);

  return (
    <div
      className={cn(
        "relative w-screen overflow-hidden bg-black",
        isMobile
          ? "h-[calc(100vh-80px-64px)]"
          : "h-[calc(100vh-52px-44px)] md:h-[calc(100vh-52px-84px)]"
      )}
    >
      {/* Current Video */}
      <video
        ref={currentVideoRef}
        key={`current-${currentIdx}`}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        src={videos[currentIdx]}
        style={{ zIndex: isTransitioning ? 1 : 2 }}
      />

      {/* Next Video (preloaded) */}
      <video
        ref={nextVideoRef}
        key={`next-${nextIdx}`}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        src={videos[nextIdx]}
        style={{ zIndex: isTransitioning ? 2 : 1 }}
      />

      {/* Optional: Loading indicator */}
      {/* <div className="absolute bottom-4 right-4 z-10 text-white text-sm bg-black/50 px-3 py-1 rounded">
        Video {currentIdx + 1} of {videos.length}
      </div> */}

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
          Biodiversity Conservation & Research Consultancy
        </h1>
        <p className="text-center text-xl max-w-lg">
          Protecting nature, advancing research and shaping a sustainable
          future.{" "}
        </p>
        <div className="text-2xl md:text-3xl text-center font-bold text-white mt-5">
          <Typewriter
            options={{
              strings: ["Launching Soon", "Stay tuned for more updates"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
