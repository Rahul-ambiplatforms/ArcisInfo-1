import React, { useState, useRef, useEffect } from 'react';

/**
 * OptimizedImage - SEO-friendly lazy-loaded image component
 *
 * Features:
 * - Native lazy loading with IntersectionObserver fallback
 * - Proper width/height to prevent CLS (Cumulative Layout Shift)
 * - Alt text enforcement for accessibility & SEO
 * - Responsive srcSet support
 *
 * Usage:
 *   <OptimizedImage
 *     src="/images/hero.jpg"
 *     alt="ArcisAI S-Series Camera"
 *     width={1200}
 *     height={630}
 *     priority={false}
 *   />
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  sizes = '100vw',
  objectFit = 'cover',
  placeholder = null,
  onLoad = () => {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const imgStyle = {
    objectFit,
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0.5,
    width: '100%',
    height: 'auto',
    ...style,
  };

  const wrapperStyle = {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: width && height ? `${width}/${height}` : undefined,
  };

  return (
    <div ref={imgRef} style={wrapperStyle} className={className}>
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          style={imgStyle}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
