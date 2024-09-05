'use client';
import React, { useRef, useEffect, memo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { guideAnimations } from '../animations/gsapAnimations';

const Guide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const boatRef = useRef<HTMLImageElement>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    guideAnimations({ sectionRef, titleRef, textRef, boatRef, infoBoxRef });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="Camp Icon"
          width={50}
          height={50}
          loading="lazy"
        />
        <p className="mt-3 mb-3 text-lg font-medium text-green-50 uppercase">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2
            ref={titleRef}
            className="text-3xl font-bold lg:text-4xl xl:text-5xl xl:max-w-[390px]"
          >
            Guide You to Easy Path
          </h2>
          <p
            ref={textRef}
            className="text-gray-600 lg:text-base xl:max-w-[520px]"
          >
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives, and friends to have fun in the wilderness through the valley and reach the top of the mountain.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          ref={boatRef}
          src="/boat.webp"
          alt="Illustration of a boat in nature"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
          loading="lazy"
        />

        <div
          ref={infoBoxRef}
          className="absolute flex gap-3 bg-white py-8 pl-5 pr-7 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <Image
            src="/meter.svg"
            alt="Meter icon"
            width={16}
            height={158}
            className="h-full w-auto"
            loading="lazy"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-sm text-gray-400">Destination</p>
                <p className="font-semibold text-green-50">2 h</p>
              </div>
              <p className="mt-2 text-lg font-bold">Cabana Bâlea Lac</p>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-sm text-gray-400">Start track</p>
              <h4 className="mt-2 text-lg font-bold">Transfăgărășan Road</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Guide);
