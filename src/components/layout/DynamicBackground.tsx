
"use client";

import { useTheme } from '@/components/theme/ThemeProvider';
import { useEffect, useState, useRef } from 'react';

const newAbstractBg = 'https://static.tildacdn.pro/tild6336-6361-4032-a637-633964656261/noroot.png';

interface Twinkle {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
  backgroundStyle: string; // For dynamic background of twinkle dots
}

interface FallingStarItem {
  id: string;
  left: string; 
  height: string; 
  animationDuration: string; 
  animationDelay: string; 
  starBaseColorOpaque: string;
  starBaseColorSemiTransparent: string;
  starBaseColorTransparent: string;
}

const STAR_COLORS_RGB = {
  white: { r: 255, g: 255, b: 255 },
  blue: { r: 0, g: 87, b: 183 }, // Russian flag blue
  red: { r: 213, g: 43, b: 30 },  // Russian flag red
};
type StarColorName = keyof typeof STAR_COLORS_RGB;
const STAR_COLOR_NAMES = Object.keys(STAR_COLORS_RGB) as StarColorName[];

const createFallingStar = (): FallingStarItem => {
  const id = `falling-star-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const colorName = STAR_COLOR_NAMES[Math.floor(Math.random() * STAR_COLOR_NAMES.length)];
  const baseRgb = STAR_COLORS_RGB[colorName];
  const animDuration = Math.random() * 2 + 2; // 2 to 4 seconds for falling speed

  return {
    id,
    left: `${Math.random() * 100}%`,
    height: `${Math.floor(Math.random() * 150) + 80}px`, // 80px to 230px long
    animationDuration: `${animDuration}s`,
    animationDelay: `${Math.random() * 7}s`, // Staggered start up to 7s
    starBaseColorOpaque: `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, 0.85)`,
    starBaseColorSemiTransparent: `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, 0.4)`,
    starBaseColorTransparent: `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, 0.05)`,
  };
};

export function DynamicBackground() {
  const { theme } = useTheme(); // Keep theme if needed for other background logic
  const [backgroundImage, setBackgroundImage] = useState(newAbstractBg);
  const [dataAiHint, setDataAiHint] = useState('abstract geometric');
  const [twinkles, setTwinkles] = useState<Twinkle[]>([]);
  const [fallingStars, setFallingStars] = useState<FallingStarItem[]>([]);
  
  // Twinkles effect
  useEffect(() => {
    const generateTwinkles = () => {
      const newTwinkles: Twinkle[] = Array.from({ length: 15 }).map((_, index) => {
        const colorName = STAR_COLOR_NAMES[Math.floor(Math.random() * STAR_COLOR_NAMES.length)];
        const baseRgb = STAR_COLORS_RGB[colorName];
        return {
          id: index,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
          backgroundStyle: `radial-gradient(circle, rgba(${baseRgb.r},${baseRgb.g},${baseRgb.b},0.5) 5%, rgba(${baseRgb.r},${baseRgb.g},${baseRgb.b},0) 85%)`
        };
      });
      setTwinkles(newTwinkles);
    };
    generateTwinkles();
  }, []);

  // Falling stars effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (fallingStars.length < 10) { // Limit the number of concurrent falling stars
        const newStar = createFallingStar();
        setFallingStars((prevStars) => [...prevStars, newStar]);

        const totalDuration = (parseFloat(newStar.animationDuration) + parseFloat(newStar.animationDelay)) * 1000;
        setTimeout(() => {
          setFallingStars(currentStars => currentStars.filter(s => s.id !== newStar.id));
        }, totalDuration + 500);
      }
    }, 1500 + Math.random() * 2000); // Add a new star approx every 1.5-3.5 seconds

    return () => clearInterval(interval);
  }, [fallingStars.length]);


  if (!backgroundImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      role="presentation"
      aria-hidden="true"
      data-ai-hint={dataAiHint}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for darkening */}
      {twinkles.map((twinkle) => (
        <div
          key={twinkle.id}
          className="twinkle-dot"
          style={{
            top: twinkle.top,
            left: twinkle.left,
            animationDelay: twinkle.animationDelay,
            animationDuration: twinkle.animationDuration,
            background: twinkle.backgroundStyle,
          }}
        />
      ))}
      {fallingStars.map(star => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            left: star.left,
            height: star.height,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            '--star-base-color-opaque': star.starBaseColorOpaque,
            '--star-base-color-semi-transparent': star.starBaseColorSemiTransparent,
            '--star-base-color-transparent': star.starBaseColorTransparent,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
