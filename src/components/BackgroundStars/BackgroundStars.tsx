import React from 'react';
import './BgStars.css';

interface SpaceLayerProps {
  size: string;
  totalStars: number;
  duration: string;
}

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const SpaceLayer: React.FC<SpaceLayerProps> = ({ size, totalStars, duration }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const layer: string[] = [];
    for (let i = 0; i < totalStars; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }

    const container = ref.current;
    if (container) {
      container.style.setProperty("--size", size);
      container.style.setProperty("--duration", duration);
      container.style.setProperty("--space-layer", layer.join(","));
    }
  }, [size, totalStars, duration]);

  return (
    <div ref={ref} className="space" />
  );
}

interface BackgroundStarsProps {
  isAbsolute?: boolean;
}

const BackgroundStars: React.FC<BackgroundStarsProps> = ({ isAbsolute = false }) => {
  return (
    <div className={isAbsolute ? 'container absolute-container' : 'fixed-container'}>
      <SpaceLayer size="2px" totalStars={250} duration="25s" />
      <SpaceLayer size="3px" totalStars={100} duration="20s" />
      <SpaceLayer size="6px" totalStars={25} duration="15s" />
    </div>
  );
}

export default BackgroundStars;