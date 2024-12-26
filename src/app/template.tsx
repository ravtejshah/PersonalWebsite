"use client";

import { motion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
  animateFromRight?: boolean;
  animateFromLeft?: boolean;
  animateFromBottom?: boolean;
  duration?: number;
}

export default function Template({
  children,
  animateFromRight = false,
  animateFromLeft = false,
  animateFromBottom = false,
  duration = 1.25,
}: TemplateProps) {
  // Dynamically apply animations based on the props passed
  let initialAnimation = { opacity: 0 };
  let animateAnimation = { opacity: 1 };

  if (animateFromRight) {
    duration = 0.7;
    initialAnimation = { ...initialAnimation, x: 100 };
    animateAnimation = { ...animateAnimation, x: 0 };
  }

  if (animateFromLeft) {
    duration = 1;
    initialAnimation = { ...initialAnimation, x: -100 };
    animateAnimation = { ...animateAnimation, x: 0 };
  }

  if (animateFromBottom) {
    duration = 1.5;
    initialAnimation = { ...initialAnimation, y: 100 };
    animateAnimation = { ...animateAnimation, y: 0 };
  }

  return (
    <motion.div
      initial={initialAnimation}
      animate={animateAnimation}
      transition={{ duration: duration }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
