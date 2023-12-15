// import { Inter } from 'next/font/google'
import { Karla, Josefin_Sans } from "next/font/google";
// import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

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
                <div className="min-h-screen">
                    <Header />
                    <div className="flex flex-1 flex-col sm:flex-row">
                        <Navbar className="order-first sm:w-30 bg-custom-silver flex flex-col justify-start items-center p-1" />
                        <main className="flex-1 bg-custom-white p-1">{children}</main>
                        {/* <Sidebar className="sm:w-30 bg-red-100 p-1" /> */}
                    </div>
                    <Footer className="bg-orange-200 p-1 text-center flex flex-col my-0" />
                </div>
            </body>
        </html>
    );
}
