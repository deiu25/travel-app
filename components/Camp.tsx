'use client';
import { useEffect, useRef, memo } from 'react';
import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { campAnimations } from '@/animations/gsapAnimations';

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = memo(({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  const campSiteRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    campAnimations({ campSiteRef });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    };
  }, []);

  return (
    <div
      ref={campSiteRef}
      className={`h-full w-full min-w-full lg:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} loading="lazy" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                loading="lazy"
              />
            ))}
          </div>
          <p className="font-semibold text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
});

const ScrollButton = ({ onClick, direction }: { onClick: () => void; direction: 'left' | 'right' }) => (
  <button
    onClick={onClick}
    className="bg-white p-2 rounded-full shadow-lg"
    aria-label={`Scroll ${direction}`}
  >
    <Image
      src={`/${direction}-arrow.svg`}
      alt={`Scroll ${direction}`}
      width={24}
      height={24}
      loading="lazy"
    />
  </button>
);

const Camp = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    campAnimations({ sectionRef });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.getBoundingClientRect().width * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <ScrollButton onClick={() => scroll('left')} direction="left" />
      </div>

      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
        ref={scrollRef}
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <ScrollButton onClick={() => scroll('right')} direction="right" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="font-medium text-white capitalize text-lg xl:text-2xl 2xl:text-4xl">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="absolute right-0 bottom-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
