"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HomeIcon, Award, MapPin, Building, Shield, Umbrella, Zap, Star, Play, Pause, User } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import InteractiveForm from "./interactive-form";

export default function UnityHomesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Initialize video autoplay when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Add error event listener
      const handleError = (e: Event) => {
        console.error("Video error occurred:", e);
        setIsPlaying(false);
      };
      
      video.addEventListener("error", handleError);
      
      // Set video properties
      video.muted = true; // Must be muted for autoplay to work in most browsers
      
      // Attempt autoplay
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("Autoplay started successfully");
          })
          .catch(error => {
            console.error("Autoplay failed:", error);
            setIsPlaying(false);
          });
      }
      
      // Clean up
      return () => {
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      console.log("Video paused");
    } else {
      // Only unmute when explicitly clicked to play
      // video.muted = false;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("Video playing");
          })
          .catch(error => {
            console.error("Error playing video:", error);
          });
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Kenyans in Spain: <GradientText>Secure Your Future</GradientText> with Prime Property Investment Back Home.
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Discover Unity Homes: Award-Winning Apartments in Tatu City. Qualify for Mortgages from Top Kenyan Banks & Meet Our Diaspora Agent Soon in Spain!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="#video-form">Learn More & Register Below</a>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-xl">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/unity-homes-feature.png"
                  alt="Unity Homes Feature"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Interactive Form Section */}
      <section id="video-form" className="w-full py-12 md:py-24 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Learn More About <GradientText>Unity Homes</GradientText>
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Watch our informational video and register your interest using the form below.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Video Column */}
            <div className="w-full max-w-md mx-auto">
              <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
                {/* Responsive aspect ratio container */}
                <div className="relative pb-[177.78%] h-0">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    preload="auto"
                    playsInline
                    muted
                    loop
                    onError={(e) => console.error("Video error:", e)}
                    onEnded={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play()
                          .then(() => setIsPlaying(true))
                          .catch(err => {
                            console.error("Error replaying video:", err);
                            setIsPlaying(false);
                          });
                      }
                    }}
                  >
                    <source src="/VideoGT7_v7COMP.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Overlay for play/pause control */}
                <button 
                  onClick={togglePlayPause}
                  className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {!isPlaying && (
                    <div className="bg-blue-600/90 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
                      <Play className="h-8 w-8" />
                    </div>
                  )}
                </button>
                
                {/* Pause button (only visible when playing) */}
                {isPlaying && (
                  <button 
                    onClick={togglePlayPause}
                    className="absolute bottom-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all focus:outline-none"
                    aria-label="Pause video"
                  >
                    <Pause className="h-5 w-5" />
                  </button>
                )}
                
                {/* Unmute button if video is muted */}
                {isPlaying && videoRef.current?.muted && (
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = false;
                      }
                    }}
                    className="absolute bottom-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all focus:outline-none"
                    aria-label="Unmute video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {/* Form Column */}
            <div className="w-full">
              <InteractiveForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Invest with Confidence: Why Unity Homes is Your{" "}
              <GradientText>Ideal Choice</GradientText>
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Unity Homes offers unparalleled value for Kenyans living abroad who want to invest wisely back home.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <HomeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Invest from Spain</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access mortgages specifically designed for the diaspora from leading Kenyan banks, making ownership achievable.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Prime Location</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Unity Homes is situated in the thriving, master-planned Tatu City, strategically located just 23km from Nairobi CBD.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Affordable Quality</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Secure modern, meticulously well-designed apartments offering exceptional value and long-term growth potential.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Proven Developer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join a community of satisfied homeowners – over 1,400 units have already been successfully delivered.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Secure Investment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enjoy peace of mind knowing the project is backed by prestigious institutions like the World Bank & African Development Bank.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <Umbrella className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Complete Lifestyle</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Live, work, and play with fantastic on-site amenities including a gym, swimming pool, restaurant, green spaces, and more.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Reliable Living</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Experience uninterrupted comfort with backup treated water systems and power generators for common areas.
              </p>
            </Card>
            <Card className="p-6 space-y-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">Highly Rated</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by residents and recognized as a top residential development (Google Rating: 4.6/5 Stars).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Your Local Contact Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get <GradientText>Personalized Guidance</GradientText> – Right Here in Spain!
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
                Meet Maureen Mungai, your dedicated Unity Homes Diaspora Agent based locally in Spain. 
                She understands the unique needs of Kenyans living abroad and is ready to assist you. 
                Maureen will be touring select cities in Spain soon – register below to find out when she'll be near you!
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <a href="/meet-maureen">Learn More About Maureen</a>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
              <div className="aspect-square relative bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center shadow-lg">
                <div className="z-10 bg-white/90 dark:bg-slate-900/90 p-6 rounded-lg shadow-md text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                    <User className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="font-bold text-xl text-blue-600 dark:text-blue-400">Maureen Mungai</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Unity Homes Diaspora Agent</p>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Based in Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 