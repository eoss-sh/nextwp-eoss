import React from "react";
import { getTextAlign, getFontSizeHeading } from "utils/font";

export const Heading = ({ content, level, textAlign }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading text-white max-w-5xl mx-auto my-auto ${getTextAlign(
      textAlign
    )} ${getFontSizeHeading(level)}`,
  });
  return tag;
};
