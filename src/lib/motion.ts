import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/data";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveals every `[data-reveal]` child of the returned ref with a staggered
 * fade-up when it scrolls into view. Content stays visible without JS and
 * when reduced motion is requested. Cleaned up via gsap.context().revert().
 */
export function useReveal<T extends HTMLElement>(immediate = false) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !portfolioData.settings.enableScrollAnimations || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll("[data-reveal]");
      if (!targets.length) return;
      gsap.from(targets, {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: immediate ? 0.1 : 0,
        scrollTrigger: immediate ? undefined : { trigger: el, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [immediate]);
  return ref;
}
