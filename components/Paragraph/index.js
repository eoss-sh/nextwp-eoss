import React from "react";
import { getTextAlign, getFontColor } from "utils/font";

export const Paragraph = ({ content, textAlign, color }) => {
  const tag = React.createElement("p", {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-body max-w-5xl mx-auto my-auto ${getTextAlign(
      textAlign
    )} ${getFontColor(color)}`,
  });
  return tag;
};
