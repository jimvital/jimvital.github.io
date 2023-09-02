import { useEffect } from "react";

type TFullPageScrollHook = (
  enable: boolean,
  mainElement?: string,
  displayDots?: boolean,
  dotsPosition?: string,
  animateTime?: number,
  animateFunction?: string
) => void;

const useFullPageScrollEffect: TFullPageScrollHook = (
  enable,
  mainElement = "main",
  displayDots = true,
  dotsPosition = "right",
  animateTime = 0.7,
  animateFunction = "ease"
) => {
  useEffect(() => {
    if (enable) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.innerHTML = `
        new fullScroll({
          mainElement: "${mainElement}",
          displayDots: ${displayDots},
          dotsPosition: "${dotsPosition}",
          animateTime: ${animateTime},
          animateFunction: "${animateFunction}",
        });
      `;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [
    enable,
    mainElement,
    displayDots,
    dotsPosition,
    animateTime,
    animateFunction,
  ]);
};

export default useFullPageScrollEffect;
