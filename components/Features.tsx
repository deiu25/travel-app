'use client';
import React, { useEffect, useRef, memo } from 'react';
import { FEATURES } from '@/constants';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { featuresAnimations } from '@/animations/gsapAnimations';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    featuresAnimations({
      sectionRef,
      phoneRef,
      titleRef,
      featuresRef,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative flex w-full justify-end">
        <div className="flex-1 flex items-center lg:min-h-[900px]">
          <Image
            ref={phoneRef}
            src="/phone.png"
            alt="Illustration of a phone showing the app features"
            width={440}
            height={1000}
            className="feature-phone"
            loading="lazy"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative mb-10" ref={titleRef}>
            <Image
              src="/camp.svg"
              alt="Camp Icon"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              loading="lazy"
            />
            <h2 className="text-4xl font-bold lg:text-6xl">Our Features</h2>
          </div>
          <ul className="grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                ref={el => {
                  featuresRef.current[index] = el;
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = memo(
  React.forwardRef<HTMLLIElement, FeatureItemProps>(({ title, icon, description }, ref) => (
    <li ref={ref} className="flex flex-col items-start">
      <div className="rounded-full bg-green-50 p-4 lg:p-7">
        <Image src={icon} alt={`${title} icon`} width={28} height={28} loading="lazy" />
      </div>
      <h2 className="mt-5 text-xl font-bold capitalize lg:text-2xl">{title}</h2>
      <p className="mt-5 text-gray-500 lg:mt-[30px]">{description}</p>
    </li>
  ))
);

FeatureItem.displayName = 'FeatureItem';

export default Features;
