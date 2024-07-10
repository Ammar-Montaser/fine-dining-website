"use client";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/header";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Home() {
  return (
    <main className=" w-full justify-between flex flex-col">
      <section className="w-full h-screen bg-gradient-to-t from-black/70 to-transparent">
        <NavBar />
        <Image
          src="https://www1.lovethatdesign.com/wp-content/uploads/2021/12/Love-That-Design-Sachi-Park-St-Restaurant-Egypt-06-1728x1152.jpg"
          alt="Sachi Picture"
          width={1728}
          height={1152}
          className="w-full h-screen absolute top-0 -z-10 object-cover border-b-brandColor border-b-8 "
        />
        <motion.h1
          className="flex flex-col w-10/12 h-[400px]  mx-auto justify-center items-center  text-7xl text-center text-white italiana"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 100, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover Exceptional Dining
          <br /> Defined by Luxury
        </motion.h1>
        <motion.div
          initial={{ y: 230, opacity: 0, color: "white" }}
          animate={{ y: 200, opacity: 1, color: "#d2d26b" }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiOutlineChevronDoubleDown className="size-20 mx-auto  duration-1000 " />
        </motion.div>
        <h2 className="text-4xl text-center font-light">
          BAKY HOSPITALITY GROUP LLC
        </h2>
      </section>
      <div className="h-screen relative">
        <div className="custom-shape-divider-top-1720484936 absolute top-0 w-full overflow-hidden"></div>
      </div>
      <Footer />
    </main>
  );
}
