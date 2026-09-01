import React from "react";

const DURATION = 1400;

// Ease-out, so the number slows down as it approaches its final value.
const easeOut = (progress) => 1 - (1 - progress) ** 3;

/**
 * Counts from zero up to `value`, starting the first time the returned ref
 * scrolls into view. Visitors who asked for reduced motion get the final value
 * straight away.
 */
const useCountUp = (value) => {
  const ref = React.useRef(null);

  const [displayed, setDisplayed] = React.useState(0);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(value);
      return;
    }

    let frame;
    let start;

    const step = (now) => {
      if (start === undefined) start = now;

      const progress = Math.min((now - start) / DURATION, 1);

      setDisplayed(Math.round(value * easeOut(progress)));

      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;

      observer.disconnect();
      frame = requestAnimationFrame(step);
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return [ref, displayed];
};

export default useCountUp;
