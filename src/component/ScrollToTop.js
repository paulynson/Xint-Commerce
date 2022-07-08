import React, { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <div>
        {visible && (
          <AnimatePresence>
            <motion.p
              className="w-8 h-8 flex justify-center items-center bottom-3 right-4 fixed bg-yellow-500 hover:bg-green-600 cursor-pointer text-white hover:rounded-full"
              onClick={scrollToTop}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <BsArrowUpShort className="text-white" />
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export default ScrollToTop;
