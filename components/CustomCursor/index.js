import { useContext } from 'react'
import { CustomCursorContext } from 'pages/_app'
import { motion } from 'framer-motion'
import useMousePosition from 'hooks/useMousePosition'

const CustomCursor = () => {
    const { cursorType, setCursorType } = useContext(CustomCursorContext)

    const mousePosition = useMousePosition()

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y - 75,
            transition: {
                type: 'spring',
                mass: 0.6,
            },
        },
        link: {
            x: mousePosition.x + 50,
            y: mousePosition.y - 75,
            scale: 10,
        },
    }

    const spring = {
        type: 'spring',
        stiffness: 80,
        damping: 15,
    }

    return (
        <motion.div
            variants={variants}
            animate={cursorType.type}
            transition={spring}
            className="fixed w-2.5 h-2.5 bg-secondary rounded-lg pointer-events-none z-50 flex items-center justify-center"
        >
            <p className="text-[2px]">{cursorType.text}</p>
        </motion.div>
    )
}

export default CustomCursor
