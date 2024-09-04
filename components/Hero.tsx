'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { heroAnimations } from '@/animations/gsapAnimations';

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    heroAnimations({
      sectionRef,
      textRef,
      imageRef,
      buttonsRef,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div
        ref={textRef}
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
      >
        <Image
          src="/camp.svg"
          alt="camp"
          width={20}
          height={20}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">New Camping Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Discover the beauty of nature with us! Explore amazing places around
          the world, right from our app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            200k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="flex flex-col w-full gap-3 sm:flex-row"
        >
          <Button type="button" title="Download the App" variant="btn_green" />
          <Button
            type="button"
            title="How We Work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div
        ref={imageRef}
        className="relative flex flex-1 items-start"
      >
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">New York City, USA</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">250 miles</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1,500 m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
