import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import 'react-loading-skeleton/dist/skeleton.css';

export function SlideImage({
  src,
  alt,
  width,
  height,
  className,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width, height }}>
      {!loaded && (
        <Skeleton
          width={width}
          height={height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoadingComplete={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </div>
  );
}
