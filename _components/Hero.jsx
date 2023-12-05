import Link from "next/link";
import Image from "next/image";

const Hero = (props) => {
    return (
        <section className="hero">
            <div>
                {/* background image for hero */}
                <img src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg" width="100" height="100" alt="" /> 
            </div>
            <div>
                <h1>Hero</h1>
                <p>Hero text</p>
            </div>
            <button className="bg-blue-600 text-white rounded hover:bg-blue-300 hover:text-black p-2">
                <Link href="/about">
                    Learn more
                </Link>
            </button>
        </section>
    )
}

export default Hero;