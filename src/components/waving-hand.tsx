import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const WavingHand = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(true);

  const animationControls = useAnimation();
  const animation = {
    rotate: [0, 15, -5, 15, 0],
  };

  return (
    <motion.div
      className="
        inline-block
        mb-[-30px] mr-[-60px]
        pb-[30px] pr-[60px]
        text-[2.5rem]    
        sm:text-[5rem]     
      "
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
