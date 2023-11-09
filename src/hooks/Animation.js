export function useAnimationEffect(type, options) {
  let select = animation[type];

  if (options?.stagger) {
    let animate = select.animate;

    animate.transition = animate.transition
      ? { ...animate.transition, staggerChildren: 0.1 }
      : { staggerChildren: 0.1 };
    select.animate = animate;
  }

  return select;
}

const animation = {
  fadeIn: {
    hidden: {
      opacity: 0,
    },

    remove: {
      opacity: 0,
      y: 20,
    },

    animate: {
      opacity: 1,
    },
  },

  dropdown: {
    hidden: {
      opacity: 0,
      y: -20,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  },

  slideUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  },

  blinking: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 1],
    },
  },

  imageLoading: {
    load: {
      backgroundColor: ["#f3f4f6", "#d1d5db", "#f3f4f6"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 1],
      },
    },

    finish: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  },

  spin: {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 2,
      },
    },
  },

  zoom: {
    animate: {
      scale: 1.2,
      filter: "brightness(0.8)",
    },
  },

  slideInFromLeft: {
    animate: {
      x: 0,
      transition: {
        ease: "linear",
      },
    },

    hidden: {
      x: "125%",
      transition: {
        ease: "linear",
      },
    },
  },

  selectBox: {
    rotate: {
      animate: {
        rotate: 180,
      },

      initial: {
        rotate: 0,
      },
    },

    slideDown: {
      animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        display: "grid",
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },

      initial: {
        y: -50,
        opacity: 0,
        scale: 0,
        transitionEnd: { display: "none" },
        transition: {
          duration: 0.1,
        },
      },
    },

    slideToLeft: {
      animate: {
        x: 0,
        opacity: 1,
      },

      initial: {
        x: 20,
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      },
    },
  },

  rotateSlide: {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 20,
      },
    },

    child: {
      animate: {
        rotate: -360,
        transition: {
          ease: "linear",
          repeat: Infinity,
          duration: 20,
        },
      },
    },
  },
};
