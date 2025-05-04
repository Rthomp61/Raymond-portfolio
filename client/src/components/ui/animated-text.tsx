import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  phrases: string[];
  interval?: number;
  className?: string;
  highlightClass?: string;
}

export function AnimatedText({
  phrases,
  interval = 3000,
  className,
  highlightClass = "text-primary"
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Wait for fade out animation to complete
      
    }, interval);

    return () => clearInterval(intervalId);
  }, [phrases, interval]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            className={cn("inline-block", highlightClass)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
