import Image from 'next/image'
import logo from '../../public/logo.svg'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center max-w-5xl h-20 mx-auto my-auto">
            <Image src={logo} width={100} height={50} alt="Logo" />
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
