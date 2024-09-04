// gsapAnimations.js
import gsap from 'gsap';

// Funcție pentru configurarea ScrollTrigger pentru animații reutilizabile
const setupScrollTrigger = (trigger, start = 'top 80%', end = 'top 50%', scrub = false) => ({
  trigger,
  start,
  end,
  scrub,
  toggleActions: 'play none none reverse',
});

// Funcție generică pentru animații
const animateElement = (element, from, to, trigger, scrub = false) => {
  gsap.fromTo(
    element,
    from,
    { ...to, scrollTrigger: setupScrollTrigger(trigger, 'top 80%', 'top 50%', scrub) }
  );
};

// Funcție de animație pentru componenta Guide
export const guideAnimations = (refs) => {
  const { sectionRef, titleRef, textRef, boatRef, infoBoxRef } = refs;

  if (!sectionRef.current) return;

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'power2.out' },
    scrollTrigger: setupScrollTrigger(sectionRef.current),
  });

  tl.fromTo(titleRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
    .fromTo(textRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "<0.3");

  animateElement(boatRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1 }, boatRef.current);
  animateElement(infoBoxRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, boatRef.current);
};

// Funcție de animație pentru componenta GetApp
export const getAppAnimations = (refs) => {
  const { sectionRef, textRef, buttonsRef, imageRef } = refs;

  if (!sectionRef.current) return;

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'power2.out' },
    scrollTrigger: setupScrollTrigger(sectionRef.current),
  });

  tl.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2 });
  tl.fromTo(buttonsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "<0.3");
  tl.fromTo(imageRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "<0.5");
};

// Funcție de animație pentru componenta Features
export const featuresAnimations = (refs) => {
  const { sectionRef, phoneRef, titleRef, featuresRef } = refs;

  if (!sectionRef.current) return;

  animateElement(phoneRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 3, ease: 'power3.out' }, sectionRef.current);
  animateElement(titleRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, sectionRef.current);
  animateElement(featuresRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, stagger: 0.2 }, sectionRef.current);
};

// Funcție de animație pentru componenta Camp
export const campAnimations = (refs) => {
  const { sectionRef, campSiteRef } = refs;

  if (sectionRef?.current) {
    animateElement(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.inOut' }, sectionRef.current, true);
  }

  if (campSiteRef?.current) {
    animateElement(campSiteRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, campSiteRef.current);
  }
};

// Funcție de animație pentru componenta Hero
export const heroAnimations = (refs) => {
  const { sectionRef, textRef, imageRef, buttonsRef } = refs;

  if (!sectionRef.current) return;

  const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });

  if (textRef?.current) {
    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2 });
  }

  if (imageRef?.current) {
    tl.fromTo(imageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, "<0.3");
  }

  if (buttonsRef?.current) {
    tl.fromTo(buttonsRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<0.5");
  }

  if (sectionRef?.current) {
    animateElement(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.inOut' }, sectionRef.current, true);
  }
};
