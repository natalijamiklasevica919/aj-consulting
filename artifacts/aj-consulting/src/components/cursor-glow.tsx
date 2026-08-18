import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { stiffness: 90, damping: 28 });
  const y = useSpring(rawY, { stiffness: 90, damping: 28 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - 200);
      rawY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rawX, rawY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[90px] hidden lg:block"
      style={{ x, y }}
    />
  );
}
