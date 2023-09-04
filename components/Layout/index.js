import { useRef } from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import CustomCursor from 'components/CustomCursor'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <CustomCursor />
            <main>{children}</main>
            <Footer />
        </>
    )
}
