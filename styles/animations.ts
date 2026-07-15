import { Transition, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                               TRANSITIONS                                  */
/* -------------------------------------------------------------------------- */

export const transition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const slowTransition: Transition = {
  duration: 1,
  ease: "easeOut",
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

/* -------------------------------------------------------------------------- */
/*                               FADE ANIMATIONS                              */
/* -------------------------------------------------------------------------- */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition,
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

/* -------------------------------------------------------------------------- */
/*                               SCALE EFFECTS                                */
/* -------------------------------------------------------------------------- */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition,
  },
};

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: slowTransition,
  },
};

export const zoomOut: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: slowTransition,
  },
};

/* -------------------------------------------------------------------------- */
/*                                ROTATIONS                                   */
/* -------------------------------------------------------------------------- */

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition,
  },
};

/* -------------------------------------------------------------------------- */
/*                                STAGGER                                     */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              HERO ANIMATION                                */
/* -------------------------------------------------------------------------- */

export const heroContent: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      staggerChildren: 0.15,
    },
  },
};

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               CARD EFFECTS                                 */
/* -------------------------------------------------------------------------- */

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const cardHover = {
  whileHover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.25,
    },
  },
};

export const imageHover = {
  whileHover: {
    scale: 1.08,
    transition: {
      duration: 0.4,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               BUTTON EFFECTS                               */
/* -------------------------------------------------------------------------- */

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

export const iconHover = {
  whileHover: {
    rotate: 8,
    scale: 1.1,
    transition: {
      duration: 0.25,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              FLOATING EFFECT                               */
/* -------------------------------------------------------------------------- */

export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                PULSE                                       */
/* -------------------------------------------------------------------------- */

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                SPIN                                        */
/* -------------------------------------------------------------------------- */

export const spinSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              PAGE TRANSITION                               */
/* -------------------------------------------------------------------------- */

export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            VIEWPORT OPTIONS                                */
/* -------------------------------------------------------------------------- */

export const viewport = {
  once: true,
  amount: 0.25,
};

/* -------------------------------------------------------------------------- */
/*                            REUSABLE EXPORT                                 */
/* -------------------------------------------------------------------------- */

const animations = {
  transition,
  slowTransition,
  springTransition,
  fadeIn,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  zoomIn,
  zoomOut,
  rotateIn,
  staggerContainer,
  staggerFast,
  heroContent,
  heroImage,
  cardReveal,
  cardHover,
  imageHover,
  buttonHover,
  iconHover,
  floating,
  pulse,
  spinSlow,
  pageTransition,
  viewport,
};

export default animations;