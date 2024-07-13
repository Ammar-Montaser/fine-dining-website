"use client";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/header";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import HoverCard from "@/components/homePageComp/hoverCard";
export default function Home() {
  return (
    <main className=" w-full justify-between flex flex-col">
      <section className="w-full h-screen bg-gradient-to-t from-black to-transparent ">
        <NavBar />
        <Image
          src="https://www1.lovethatdesign.com/wp-content/uploads/2021/12/Love-That-Design-Sachi-Park-St-Restaurant-Egypt-06-1728x1152.jpg"
          alt="Sachi Picture"
          width={1728}
          height={1152}
          className="w-full h-screen absolute top-0 -z-10 object-cover "
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
      <section className="h-screen w-full  flex max-xl:flex-col justify-around  items-center  bg-gradient-to-b from-[#000000] to-[#1a1a0e] ">
        <HoverCard
          title="OUR STORY"
          description="  At Sachi, our devotion to food and commitment to exceptional
              hospitality infuse every aspect of our dining experience. Rooted
              in Mediterranean traditions and infused with Asian influences, our
              cuisine is crafted to be shared among friends, fostering genuine
              moments of joy and authenticity."
          url="https://static.wixstatic.com/media/62f845_3f79e4f2bda34179bbdb6b6b0bcac9e4~mv2.png/v1/fill/w_876,h_609,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3_Irish%20Coffee.png"
        />

        <div className="max-xl:hidden border-l-brandColor border-l-4 h-full"></div>
        <HoverCard
          title="CHILD OF JOY"
          description='"Our joy in life comes when we see our children happy and experiencing true unconditional love. We have been blessed with three kids, Sasha, Chris, and Alexa, who gave us happiness, love and a new meaning to life. SACHI is a small dedication from us to our children, and the name is inspired from the Japanese word that means Child of Joy" - Ayman Baky'
          url="https://static.wixstatic.com/media/44afc8_1ad2c6e8410141e3b8bca16f69bba702~mv2.jpg/v1/crop/x_281,y_0,w_5754,h_4160/fill/w_880,h_634,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_1933.jpg"
        />
      </section>
      <section className="bg h-screen w-full flex flex-col  items-center justify-center  mx-auto bg-gradient-to-b from-[#1a1a0e] to-[#33331d] relative overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/62f845_d3e96fc03259421eada5887302a2221c~mv2.jpg/v1/crop/x_0,y_2,w_6795,h_3297/fill/w_814,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WIXworld50best-lighbox.jpg"
          alt="awards"
          width={2000}
          height={2000}
          className="w-7/12 max-xl:w-11/12 mx-auto mt-5 "
        />
        <p className="text-2xl text-center w-1/2 max-xl:w-10/12 mx-auto mt-10 bg-black py-5 border-brandColor/50 border-4">
          <b className="text-brandColor">SACHI</b> Park St. &
          <b className="text-brandColor"> SACHI</b> Heliopolis are the Winners
          of the
          <b className="text-brandColor"> Best Restaurant in Egypt</b> by “The
          World’s 50 best Restaurants” and are also ranked
          <b className="text-brandColor"> #15</b> &
          <b className="text-brandColor"> #33</b> in the “MENA’s 50 Best
          Restaurants”
        </p>
        <motion.img
          src="/fork-in-diagonal.png"
          key={"fork"}
          alt="fork"
          initial={{ x: -300, y: 100, opacity: 0 }}
          whileInView={{ x: -150, y: 200, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute left-0 "
        />
        <motion.img
          src="/knife-silhouette-in-diagonal-position.png"
          alt="knife"
          key={"knife"}
          initial={{ x: 300, y: 100, rotateX: 0, rotateY: 180, opacity: 0 }}
          whileInView={{ x: 150, y: 200, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute right-0  "
        />
      </section>
      <section className="h-screen w-full flex flex-col  items-center justify-center  mx-auto bg-gradient-to-b from-[#33331d] to-[#4d4d2c]  "></section>
      <section className="h-screen w-full flex flex-col  items-center justify-center  mx-auto bg-gradient-to-b from-[#4d4d2c] to-[#666639]  "></section>
      <section className="h-screen w-full flex flex-col  items-center justify-center  mx-auto bg-gradient-to-b from-[#666639] to-[#808046]  "></section>
      <section className="h-screen w-full flex flex-col  items-center justify-center  mx-auto bg-gradient-to-b from-[#808046] to-[#999953]  "></section>

      <Footer />
    </main>
  );
}
