import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { Heading } from 'components/Heading'
import ParagraphWithLinks from 'components/ParagraphWithLinks'

export default function Home() {
    const hero = useRef()

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(hero.current, {
                y: -100,
                duration: 1,
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center bg-primary px-4 lg:px-0 py-52">
                <Heading
                    content="Wir schaffen Digitales, das Nutzer und Suchmaschinen begeistert."
                    level={1}
                    font="body"
                />
                <ParagraphWithLinks color="base">
                    <a href="#">Entwicklung</a>, die überzeugt. Design, das
                    fesselt. Content, der berührt. SEO-Optimierung, die
                    Ergebnisse liefert - aus einer Hand.
                </ParagraphWithLinks>
            </div>
        </>
    )
}
