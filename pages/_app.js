import { useMemo, createContext, useState } from 'react'
import Layout from 'components/Layout'
import '../styles/globals.css'

export const CustomCursorContext = createContext({
    cursorType: { type: 'default', text: '' },
    setCursorType: () => {},
})

function MyApp({ Component, pageProps }) {
    const [cursorType, setCursorType] = useState({ type: 'default', text: '' })
    const value = useMemo(() => ({ cursorType, setCursorType }), [cursorType])
    return (
        <CustomCursorContext.Provider value={value}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CustomCursorContext.Provider>
    )
}

export default MyApp
