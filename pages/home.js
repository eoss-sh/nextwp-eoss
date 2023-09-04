import Columns from 'components/Columns'
import Hero from '../components/Hero'
import { Heading } from 'components/Heading'
import ParagraphWithLinks from 'components/ParagraphWithLinks'

export default function Home() {
    return (
        <>
            <Hero />
            <section className="py-52">
                <Columns layout="1/4">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">
                        <Heading
                            level="4"
                            color="secondary"
                            content="- Question the answer. -"
                        />
                        <ParagraphWithLinks level="3">
                            Wir verstehen uns als Sparringspartner und
                            Hinterfrager. Unser Team von Spezialisten aus
                            verschiedensten Bereichen lässt keinen Stein
                            unumgedreht. Das ist manchmal mühsam, ohne Zweifel.
                            Aus unserer Erfahrung jedoch die Basis für&nbsp;
                            <a href="#">erfolgreiche Projekte</a>.
                        </ParagraphWithLinks>
                    </div>
                </Columns>
            </section>
        </>
    )
}
