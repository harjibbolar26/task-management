import Image from "next/image";
import Sidebar from "./components/sidebar/page";
import "@/app/globals.css"
import Navbar from "./components/navbar/page";
import HomeContent from "./components/homeContent/page";

export default function Home() {
  return (
    <>
    <Sidebar/>
    <HomeContent/>
    <Navbar/>
    </>
  );
}
