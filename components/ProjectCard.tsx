import TailwindImage from "./TailwindImage"
import Image from "next/image"
import {ArrowRightIcon} from '@heroicons/react/solid'

function ProjectCard({href, img, h1, h2, p, buttonText, alt}: {href: string, img: string, alt: string, h1: string, h2: string, p: string, buttonText: string}) {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {/* Image */}
        <img className="md:h-52 w-full object-fill object-center" src={img} alt={alt} />
        
        {/* Content */}
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-100 mb-3">{h1}</h1>
          <h2 className="leading-relaxed mb-3 text-gray-400">{h2}</h2>
          <p className="tracking-widest text-xs title-font font-medium text-gray-500 mb-3 capitalize">{p}</p>
          <div className="flex items-center flex-wrap">
            <a href={href} className="text-indigo-500 inline-flex items-center cursor-pointer">{buttonText}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard