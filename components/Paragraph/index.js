import React from "react";
import { getTextAlign, getFontColor } from "utils/font";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ content, textAlign, color }) => {
  const tag = React.createElement("p", {
    dangerouslySetInnerHTML: { __html: relativeToAbsoluteUrls(content) },
    className: `font-body max-w-5xl mx-auto my-auto ${getTextAlign(
      textAlign
    )} ${getFontColor(color)}`,
  });
  return tag;
};
