'use client';
import { useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import Button from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { heroAnimations } from '@/animations/gsapAnimations';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    heroAnimations({
      sectionRef,
      textRef,
      imageRef,
      buttonsRef,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); 
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div ref={textRef} className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="Camping Icon"
          width={20}
          height={20}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">Piatra Craiului Camping Area</h1>
        <p className="mt-6 text-gray-500 xl:max-w-[520px]">
        Discover the breathtaking landscapes of Romania with us! Explore stunning mountain areas like never before with our app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="Star icon representing excellent reviews"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              ))}
          </div>

          <p className="text-lg font-semibold text-blue-700">
            200k
            <span className="ml-1 text-base font-normal">Excellent Reviews</span>
          </p>
        </div>

        <div ref={buttonsRef} className="flex w-full flex-col gap-3 sm:flex-row">
          <Button type="button" title="Download the App" variant="btn_green" />
          <Button type="button" title="How We Work?" icon="/play.svg" variant="btn_white_text" />
        </div>
      </div>

      <div ref={imageRef} className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-900 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Location</p>
              <Image src="/close.svg" alt="Close icon" width={24} height={24} loading="lazy" />
            </div>
            <p className="mt-2 text-lg font-bold text-white">Zărnești, Romania</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Distance</p>
              <p className="text-lg font-bold text-white">35 km</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Elevation</p>
              <p className="text-lg font-bold text-white">1,600 m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
