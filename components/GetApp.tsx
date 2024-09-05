'use client';
import React, { useEffect, useRef, memo } from 'react';
import Button from './Button';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getAppAnimations } from '@/animations/gsapAnimations';

const GetApp = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    getAppAnimations({ sectionRef, textRef, buttonsRef, imageRef });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-full pb-[100px]"
    >
      <div className="get-app flex w-full max-w-6xl items-center">
        <div
          ref={textRef}
          className="flex flex-1 flex-col items-start justify-center gap-6 lg:gap-12"
        >
          <h2 className="text-3xl font-bold lg:text-4xl xl:text-5xl xl:max-w-[320px]">
          Download for Free Today!
          </h2>
          <p className="text-gray-10 lg:text-lg">Available on iOS and Android for seamless navigation through Romania’s majestic mountain trails</p>
          <div
            ref={buttonsRef}
            className="flex flex-col gap-3 w-full xl:flex-row"
          >
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
              aria-label="Download from App Store"
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
              aria-label="Download from Play Store"
            />
          </div>
        </div>

        <div
          ref={imageRef}
          className="flex flex-1 items-center justify-end"
        >
          <Image
            src="/phones.webp"
            alt="Mobile phones displaying the app interface"
            width={550}
            height={870}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(GetApp);
