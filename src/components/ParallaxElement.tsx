import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Positive = moves up faster, Negative = lags behind
  rotateSpeed?: number; // Subtle rotation during scroll
  className?: string;
  horizontalOffset?: [number, number]; // [startOffsetPx, endOffsetPx]
  verticalOffset?: [number, number]; // Custom range in px e.g. [-50, 50]
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.2,
  rotateSpeed = 0,
  className = '',
  horizontalOffset,
  verticalOffset,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate vertical travel based on speed or explicit offset
  const defaultRange: [number, number] = verticalOffset || [100 * speed, -100 * speed];
  const y = useTransform(smoothProgress, [0, 1], defaultRange);

  const x = horizontalOffset
    ? useTransform(smoothProgress, [0, 1], horizontalOffset)
    : undefined;

  const rotate = rotateSpeed !== 0
    ? useTransform(smoothProgress, [0, 1], [-rotateSpeed, rotateSpeed])
    : undefined;

  return (
    <motion.div
      ref={ref}
      style={{ y, x, rotate }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
