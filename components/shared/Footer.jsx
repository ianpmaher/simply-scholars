import Link from "next/link";

const Footer = ({ className }) => (
    <footer className={className}>
        <Link href="https://ianpmaher.com/" target="_blank">
            <p className=" text-xs">🌐 {new Date().toLocaleDateString()} Ian Maher</p>
        </Link>
    </footer>
);

export default Footer;
