import React from "react";

interface ISection {
  anchor: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Section: React.FC<ISection> = ({
  anchor,
  className,
  style,
  children,
}) => {
  return (
    <section data-anchor={anchor} className={className} style={style}>
      {children}
    </section>
  );
};

export default Section;
