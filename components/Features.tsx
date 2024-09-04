'use client';
import React, { useEffect, useRef } from 'react';
import { FEATURES } from '@/constants';
import Image from 'next/image';
import gsap from 'gsap';
import { featuresAnimations } from '@/animations/gsapAnimations';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Features = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    featuresAnimations({
      sectionRef,
      phoneRef,
      titleRef,
      featuresRef,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            ref={phoneRef}
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative" ref={titleRef}>
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                ref={(el) => {
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

const FeatureItem = React.forwardRef<HTMLLIElement, FeatureItemProps>(
  ({ title, icon, description }, ref) => {
    return (
      <li ref={ref} className="flex w-full flex-1 flex-col items-start">
        <div className="rounded-full p-4 lg:p-7 bg-green-50">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    );
  }
);

FeatureItem.displayName = 'FeatureItem';

export default Features;
