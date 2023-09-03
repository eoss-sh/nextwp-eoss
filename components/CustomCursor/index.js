import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useMouse } from '@uidotdev/usehooks'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [mouse] = useMouse()

    console.log(mouse)
    const variants = {
        default: {
            x: mouse.x,
            y: mouse.y - 75,
            transition: {
                type: 'spring',
                mass: 0.6,
            },
        },
    }

    const spring = {
        type: 'spring',
        stiffness: 500,
        damping: 28,
    }

    const mouseMoveHandler = (e) => {
        const { clientX: x, clientY: y } = e
        setMousePosition({ x, y })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])
    return (
        <motion.div
            variants={variants}
            animate="default"
            transition={spring}
            className="fixed w-2.5 h-2.5 bg-secondary rounded-lg pointer-events-none z-50"
        ></motion.div>
    )
}

export default CustomCursor
