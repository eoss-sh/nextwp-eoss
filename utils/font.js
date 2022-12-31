export const getTextAlign = (textAlign = "left") => {
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return `${textAlignMap[textAlign || ""]}`;
};

export const getFontSizeHeading = (level = "1") => {
  const fontSizeMap = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  return `${fontSizeMap[level] || ""}`;
};

export const getFontColor = (color = "text-black") => {
  const fontColorMap = {
    base: "text-base",
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    contrast: "text-contrast",
  };
  return `${fontColorMap[color] || ""}`;
};
