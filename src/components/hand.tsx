import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const WavingHand = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(true);

  const animationControls = useAnimation();
  const animation = {
    rotate: [0, 15],
  };

  return (
    <motion.div
      style={{
        marginBottom: "-30px",
        marginRight: "-60px",
        paddingBottom: "30px",
        paddingRight: "60px",
        display: "inline-block",
        fontSize: "5rem",
      }}
      animate={animationControls}
      whileInView={() => {
        if (isFirstLoad) {
          setIsAnimationPlaying(true);
          animationControls.start(animation);
        }
        setisFirstLoad(false);
      }}
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
        yoyo: 5,
        from: 0,
        duration: 0.5,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      👋🏽
    </motion.div>
  );
};

export default WavingHand;