// import React, { useRef, useState, useEffect } from 'react';

// const LazyImage = ({ src, alt, ...props }) => {
//   const imgRef = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if ('IntersectionObserver' in window) {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.disconnect();
//           }
//         },
//         { rootMargin: '200px' } // загружать чуть заранее
//       );
//       if (imgRef.current) {
//         observer.observe(imgRef.current);
//       }
//       return () => observer.disconnect();
//     } else {
//       // Фоллбек для старых браузеров
//       setIsVisible(true);
//     }
//   }, []);

//   return (
//     <img
//       ref={imgRef}
//       src={isVisible ? src : undefined}
//       alt={alt}
//       {...props}
//       loading="lazy"
//     />
//   );
// };

// export default LazyImage;
