import Link from "next/link";
import Button from "./Button";

const Hero = ({className}) => {
    return (
        <section className="flex justify-around align-center">
            {/* <div className="m-0 rounded flex "> */}
                {/* background image for hero */}
            {/* </div> */}
            <div>
                <h1>Hero</h1>
            </div>
            <Button className={"button-base hover:bg-custom-silver hover:text-black transition-all duration-200"}>
                <Link href="/scholarships">
                    Learn more
                </Link>
            </Button>
        </section>
    )
}

export default Hero;