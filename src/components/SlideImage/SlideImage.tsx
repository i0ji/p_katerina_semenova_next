import { useState } from 'react';
import Image from 'next/image';

export default function SlideImage({
  src,
  alt,
  width,
  height,
  className,
  onLoad,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onLoad?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: 1880 / 1200,
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoadingComplete={handleLoad}
        loading="lazy"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}
      />
    </div>
  );
}