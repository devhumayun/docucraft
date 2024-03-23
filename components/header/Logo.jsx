
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <div className="hidden lg:flex">
            <Link href="/">
                <Image src="/logo.svg"
                    alt="Logo" className="h-6 w-auto"
                    height={20}
                    width={100}
                    property
                />
            </Link>
        </div>
    )
}

export default Logo
