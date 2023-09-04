import React from 'react'
import {
    getTextAlign,
    getFontSizeHeading,
    getFont,
    getFontColor,
} from 'utils/font'

export const Heading = ({
    content,
    level,
    textAlign,
    font = 'heading',
    color = 'base',
}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `max-w-5xl mx-auto my-auto ${getTextAlign(
            textAlign
        )} ${getFontSizeHeading(level)} ${getFont(font)} ${getFontColor(
            color
        )}`,
    })
    return tag
}
