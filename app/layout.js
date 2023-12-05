// import { Inter } from 'next/font/google'
import { Karla, Josefin_Sans } from "next/font/google";
// import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

// const inter = Inter({ subsets: ['latin'] })
const karla = Karla({ subsets: ["latin"], display: "swap" });
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
    title: "Simply Scholars",
    description: "Find your next scholarship!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={karla.className}>
                <Header />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
