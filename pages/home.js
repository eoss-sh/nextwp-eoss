import Columns from 'components/Columns'
import Hero from '../components/Hero'
import { Heading } from 'components/Heading'

export default function Home() {
    return (
        <>
            <Hero />
            <section className="py-52">
                <Columns layout="1/4">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">
                        <Heading
                            level="3"
                            color="white"
                            font="body"
                            content="Wir verstehen uns als Sparringspartner und Hinterfrager.
                    Unser Team von Spezialisten aus verschiedensten Bereichen
                    lässt keinen Stein unumgedreht. Das ist manchmal mühsam,
                    ohne Zweifel. Aus unserer Erfahrung jedoch die Basis für
                    erfolgreiche Projekte."
                        />
                    </div>
                </Columns>
            </section>
        </>
    )
}
