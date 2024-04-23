import React, { useEffect, useRef, useState } from 'react';

const PopoutComponent = ({ children }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasPoppedOut, setHasPoppedOut] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!hasPoppedOut) {
          setIntersecting(entry.isIntersecting);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasPoppedOut]);

  useEffect(() => {
    if (isIntersecting && !hasPoppedOut) {
      setHasPoppedOut(true);
      // Add code here to set the position and overflow properties of the underlying page
    }
  }, [isIntersecting, hasPoppedOut]);

  return (
    <div ref={ref} style={{ transform: hasPoppedOut ? 'translateY(0)' : 'translateY(50px)', opacity: hasPoppedOut ? 1 : 0, transition: 'all 0.5s ease-in-out' }}>
      {children}
    </div>
  );
};

export default PopoutComponent;