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

// background: linear-gradient(30deg, #004E98 0%, #243c5a 30%, #3A6EA5 60%, #7CE2FE 90%)

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={karla.className}>
                <div className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
                    <Header className="w-[50vw] rounded-md flex my-0 mx-auto justify-center content-center items-center bg-gradient-to-br from-custom-turquoise from-10% via-custom-skyblue via-20% to-custom-green to-80%" />
                    <div className="flex flex-1 flex-col sm:flex-row">
                        <Navbar className=" order-first sm:w-30 bg-custom-silver flex md:flex-col sm:flex-row justify-start items-center" />
                        <main className="flex-1 bg-custom-white ">{children}</main>
                        <Sidebar className="sm:w-30 bg-red-100" />
                    </div>
                    <Footer className="bg-orange-200 p-1 text-right fixed bottom-0 right-1 flex flex-col my-0" />
                </div>
            </body>
        </html>
    );
}
