"use client";
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const page = () => {
  return (
    <div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Callify - Video Conferencing App
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Emma gives the explanation on the working of Callify
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          
          <iframe 
          width="1000" 
          height="1000" 
          src="https://www.youtube.com/embed/-muNwJdUUJ4?si=lIKr13AxNBvfZ62Y" 
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://callify-meet.vercel.app/team"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Team →
          </CardItem>
          <Link
            href={"https://github.com/Anish202020/callify-meet"}
            target="__blank"
            className="px-4 py-2 rounded-xl flex gap-1 justify-center bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <FaGithub className='size-4' />
            <div className='top-6'>Github</div>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  )
}

export default page
