import { useEffect } from "react";

type TFullPageScrollHook = (
  mainElement?: string,
  displayDots?: boolean,
  dotsPosition?: string,
  animateTime?: number,
  animateFunction?: string
) => void;

const useFullPageScrollEffect: TFullPageScrollHook = (
  mainElement = "main",
  displayDots = true,
  dotsPosition = "right",
  animateTime = 0.7,
  animateFunction = "ease"
) => {
  useEffect(() => {
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
  }, [mainElement, displayDots, dotsPosition, animateTime, animateFunction]);
};

export default useFullPageScrollEffect;
