import { useContext } from 'react'
import { CustomCursorContext } from 'pages/_app'
import { Heading } from 'components/Heading'
import ParagraphWithLinks from 'components/ParagraphWithLinks'

export default function Home() {
    const { cursorType, setCursorType } = useContext(CustomCursorContext)

    console.log(setCursorType)
    return (
        <>
            <div className="flex flex-col justify-center bg-primary px-4 lg:px-0 py-52">
                <Heading
                    content="Wir schaffen Digitales, das Nutzer und Suchmaschinen begeistert."
                    level={1}
                    font="body"
                />
                <ParagraphWithLinks color="base">
                    <a
                        href="#"
                        onMouseEnter={(cursorType) =>
                            setCursorType({ type: 'link', text: 'View' })
                        }
                        onMouseLeave={(cursorType) =>
                            setCursorType({ type: 'default', text: '' })
                        }
                    >
                        Entwicklung
                    </a>
                    , die überzeugt. Design, das fesselt. Content, der berührt.
                    SEO-Optimierung, die Ergebnisse liefert - aus einer Hand.
                </ParagraphWithLinks>
            </div>
        </>
    )
}
