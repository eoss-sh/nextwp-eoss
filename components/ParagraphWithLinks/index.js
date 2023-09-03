import { getFontColor, getFontSizeHeading, getFont } from 'utils/font'

const ParagraphWithLinks = ({
    level = 'p',
    color = 'black',
    font = 'body',
    children,
}) => {
    return (
        <p
            className={`max-w-5xl mx-auto my-auto grid auto-rows-fr grid-cols-[min(65ch,_100%)] ${getFontSizeHeading(
                level
            )} ${getFontColor(color)} ${getFont(font)}`}
        >
            <apan>{children}</apan>
        </p>
    )
}

export default ParagraphWithLinks
