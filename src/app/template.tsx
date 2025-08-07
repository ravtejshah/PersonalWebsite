"use client";
import { motion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
  animateFromRight?: boolean;
  animateFromLeft?: boolean;
  animateFromBottom?: boolean;
  duration?: number;
}
const getVariants = (x: number, y: number) => ({
  initial: { opacity: 0, x: x, y: y },
  animate: { opacity: 1, x: 0, y: 0 },
});
// Define the motion variants for animations
const x = 0; 
const y = 100;
const variants = getVariants(x, y);

export default function Template({
  children,
  animateFromRight = false,
  animateFromLeft = false,
  animateFromBottom = false,
  duration = 1.5,
}: TemplateProps) {
  // Set initial x and y values based on animation direction
  let x = 0;
  let y = 0;

  if (animateFromRight) {
    duration = 1.5;
    x = 100;
  }

  if (animateFromLeft) {
    duration = 3;
    x = -100;
  }

  if (animateFromBottom) {
    duration = 5;
    y = 100;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      custom={{ x, y }} // Pass the custom values for initial state
      transition={{ duration: duration }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
