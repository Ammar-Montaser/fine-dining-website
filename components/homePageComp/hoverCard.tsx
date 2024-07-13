"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  url: string;
  title: string;
  description: string;
  classname?: string;
}

function HoverCard(props: Props) {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className={
        props.classname +
        " w-[40%] h-[90%] max-xl:w-[90%] max-xl:h-[50%]  flex flex-col justify-center items-center relative  "
      }
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={props.url}
        alt="picture of sachi"
        width={880}
        height={634}
        className="  object-cover rounded-3xl  w-full h-2/4 hover:shadow-md hover:shadow-brandColor/40 transition-all duration-1000 "
      />
      <motion.div
        className="flex flex-col  w-full   text-center z-10   m-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="text-8xl max-xl:text-4xl  italiana text-brandColor text-nowrap">
          {props.title}
        </h2>
        <p className="text-md max-xl:text-sm text-pretty ">
          {props.description}
        </p>
      </motion.div>
    </div>
  );
}

export default HoverCard;
