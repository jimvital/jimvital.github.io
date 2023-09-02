import React from "react";

interface ISection {
  anchor: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Section: React.FC<ISection> = ({ anchor, style, children }) => {
  return (
    <section data-anchor={anchor} style={style}>
      {children}
    </section>
  );
};

export default Section;
