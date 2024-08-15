"use client";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export const Animate = ({ x = 10, children }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className="overflow-hidden"
      variants={{
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.7, type: "keyframes" },
        },
        hidden: {
          x,
          opacity: 0,
          transition: { duration: 0.5, type: "keyframes" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const Zoom = ({ children, className }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className={`overflow-hidden ${className}`}
      variants={{
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.7, type: "keyframes" },
        },
        hidden: {
          scale: 0,
          opacity: 0,
          transition: { duration: 0.5, type: "keyframes" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
