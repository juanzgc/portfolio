import React from "react";
import { DatabaseIcon, DocumentTextIcon } from "@heroicons/react/outline"
import {ArrowRightIcon} from '@heroicons/react/solid'

function Technologies() {
  return (
    <div>
      <p className="mb-10 font-medium text-4xl font-mono bg-gradient-to-r from-gray-100 to-gray-600 text-transparent bg-clip-text">Technologies</p>
      <div className="flex flex-col md:flex-row flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 md:items-start items-center">
        <TechItem Icon={ReactSVG} btnText="Learn More" h2="Front-End" p="Experience with ReactJS, TailwindCSS, MaterialUI, Bootstrap, AngularJS and more!" />
        <TechItem Icon={DatabaseIcon} btnText="Learn More" h2="Back-End" p="SQL and NoSQL: PostgreSQL, MongoDB, Firebase Realtime Database. Strapi CMS & Prisma ORM" />
        <TechItem Icon={DocumentTextIcon} btnText="Learn More" h2="Artificial Intelligence" p="IBM Watson Assistant, IBM Text-to-Speech, IBM Speech-to-Text, Google Facial Recognition." />
      </div>
    </div>

  )
}

export default Technologies

function TechItem({Icon, btnText, h2, p}: {Icon: any, btnText: string, h2: string, p: string}) {
  return (
    <div className="p-4 md:w-1/3 max-w-md flex flex-col flex-grow text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Icon className="w-10 h-10" />
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-100 text-lg title-font font-medium mb-3">{h2}</h2>
        <p className="text-gray-400 leading-relaxed text-base">{p}</p>
        {/* <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">{btnText}
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a> */}
      </div>
    </div>
  )
}

function ReactSVG() {
  return (
   <object className="w-full h-full" data="/react.svg" type="image/svg+xml"></object>
  )
}
