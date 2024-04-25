"use client";

import { useRef, useEffect } from "react";

const HeroSection = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainElement) return;

      const mainRect = mainElement.getBoundingClientRect();
      const x = (e.clientX - mainRect.left - mainRect.width / 2) * 0.05;
      const y = (e.clientY - mainRect.top - mainRect.height / 2) * 0.05;
      dotsRef.current!.style.transform = `translate(${-x}px, ${-y}px)`;
    };

    mainElement?.addEventListener("mousemove", handleMouseMove);

    return () => {
      mainElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      id="main"
      ref={mainRef}
      className="relative overflow-hidden grid place-items-center"
      style={{ height: "calc(100vh - 48px)" }}
    >
      <div className="absolute w-full h-full -z-10">
        <div
          className="absolute w-full h-full z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, transparent 0%, #000000 80%)",
          }}
        />
        <div
          id="dots"
          ref={dotsRef}
          className="absolute w-full h-full ease-out duration-500"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>
      <div
        id="container"
        className="max-w-2xl w-full px-2 text-[#dddddd] text-center"
      >
        <h1 className="text-7xl font-bold tracking-tighter">
          Welcome to our <span className="text-8xl">Blog</span>
        </h1>
        <p className="my-4">
          Dive deep into insights, connect with diverse perspectives: Your
          destination for meaningful reading experiences that resonate and
          inspire.
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
