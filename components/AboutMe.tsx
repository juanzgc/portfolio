// Component from https://tailwindcomponents.com/component/vertical-timeline

import React from "react";

// Responsive Timeline: Mobile view timeline is on pushed to the left. On other screens a two sided timeline.
function AboutMe() {
  return (
    <div>
      <p className="w-full h-full mb-10 font-medium text-4xl font-mono bg-gradient-to-r from-gray-100 to-gray-600 text-transparent bg-clip-text">About Me</p>

      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-red-500">
        <RightTimeLine isStart={true} year="2020" title="IBM - Software Engineer Full Time" description="Design, develop, test and deliver offerings using leading edge and/or proven technologies. Work in an Agile, collaborative environment to understand stakeholder requirements. Design, code, and test innovative component-level software solutions. Ensure that the implemented solutions are unit tested and ready to be integrated into a product. Also debug customer-reported problems." />
        <LeftTimeLine year="2019" title="IBM - Internship" description="Full Stack Developer Intern. Architecture design and implementation lead for building out the Jira Access request capability within IBM Watson Health. Containerized NodeJS application utilizing Docker and a Kubernetes Cluster. Leveraged Atlassian Jira SDK to build a Jira REST Plugin. (May 2019 - Aug 2019)" />
        <RightTimeLine year="2019" title="Verto - Mobile Developer Intern" description="Developed a mobile application with React Native. Technologies include: Amazon Web Services, PassportJS, Chat Bot using AWS ElastiCache for Redis. (Feb 2019 - May 2019)" />
        <LeftTimeLine year="2018" title="Livelo - Lead Software Developer" description="Full Stack Developer - Part Time. Create an E-Commerce Application for professional road bike rentals across 9 countries. Technologies used includes: NextJS, PostgreSQL, Auth0, Bootstrap, MaterialUI, & Prisma. (2018 - Present)" />
        <RightTimeLine year="2017" title="Covered Security - Internship" description="Full Stack Developer Intern. MEAN Stack (MongoDB, ExpressJS, AngularJS, NodeJS). Internship consisted of creating a Google Chrome browser extension that detects stored credit card information as you browse the web. (Mar 2017 - Sep 2017)" />
        <LeftTimeLine isEnd={true} year="2016" title="Started my journey" description="Attended Boston University and pursued a Bachelor's of Science degree in Computer Engineering. (2016-2020)" />

      </div>
    </div>
  )
}

export default AboutMe;

function RightTimeLine({year, title, description, isStart, isEnd}: {year: string, title: string, description: string, isStart?: boolean, isEnd?: boolean}) {
  return (
    <div className="flex md:contents">
      {/* Middle Line */}
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className={`h-full w-1 bg-red-400 pointer-events-none ${isStart == true ? 'rounded-t-full' : ''}  ${isEnd == true ? 'rounded-b-full' : ''}`}></div>
        </div>

        {/* Year */}
        <div className="w-14 h-14 absolute top-1/2 -mt-7 -ml-4 rounded-full bg-white shadow items-center">
          <p className="font-semibold text-lg text-indigo-400 mt-3 ml-2">{year}</p>
        </div>
      </div>

      {/* Timeline Description */}
      <div className="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <h3 className="font-bold text-xl mb-1 text-gray-100">{title}</h3>
        <p className="leading-tight text-justify text-gray-200">{description}</p>
      </div>
    </div>
  )
}

function LeftTimeLine({year, title, description, isStart, isEnd}: {year: string, title: string, description: string, isStart?: boolean, isEnd?: boolean}) {
  return (
    <div className="flex flex-row-reverse md:contents">
      
      {/* Timeline Description */}
      <div className="bg-[#13adc7] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
        <h3 className="font-bold text-xl mb-1 text-gray-100">{title}</h3>
        <p className="leading-tight text-justify text-gray-200">{description}</p>
      </div>

      {/* Middle Line */}
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-full w-6 flex items-center justify-center">
          <div className={`h-full w-1 bg-red-400 pointer-events-none ${isStart == true ? 'rounded-t-full' : ''}  ${isEnd == true ? 'rounded-b-full' : ''}`}></div>
        </div>

        {/* Year */}
        <div className="w-14 h-14 absolute top-1/2 -mt-7 -ml-4 rounded-full bg-white shadow items-center">
          <p className="font-semibold text-lg text-indigo-400 mt-3 ml-2">{year}</p>
        </div>
      </div>
    </div>
  )
}

