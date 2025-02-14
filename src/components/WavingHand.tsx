import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const WavingHand = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(true);

  const animationControls = useAnimation();
  const animation = {
    rotate: [0, 15, -5, 15, 0],
  };

  const [fontSize, setFontSize] = useState("5rem");

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 640;
      const isMediumScreen = window.innerWidth < 768;
      const fontSize = isSmallScreen
        ? "2.5rem"
        : isMediumScreen
        ? "4rem"
        : "5rem";
      setFontSize(fontSize);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      style={{
        marginBottom: "-30px",
        marginRight: "-60px",
        paddingBottom: "30px",
        paddingRight: "60px",
        display: "inline-block",
        fontSize: fontSize,
      }}
      animate={animationControls}
      whileInView={
        (() => {
          if (isFirstLoad) {
            setIsAnimationPlaying(true);
            animationControls.start(animation);
          }
          setisFirstLoad(false);
        }) as any
      }
      onHoverStart={() => {
        if (!isAnimationPlaying) {
          setIsAnimationPlaying(true);
          animationControls.start(animation);
        }
      }}
      onAnimationComplete={() => {
        setIsAnimationPlaying(false);
      }}
      transition={{
        yoyo: Infinity,
        duration: 1,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      👋🏽
    </motion.div>
  );
};

export default WavingHand;
