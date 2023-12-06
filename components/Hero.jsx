import Link from "next/link";
import Image from "next/image";

const Hero = ({className}) => {
    return (
        <section className="flex justify-around align-center">
            {/* <div className="m-0 rounded flex "> */}
                {/* background image for hero */}
            {/* </div> */}
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