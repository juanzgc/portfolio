import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Animation from '../components/Animation'
import Divider from '../components/Divider'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import AboutMe from '../components/AboutMe'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Juan Zapata Gomez</title>
        <meta name="description" content="Full Stack Developer - Boston, MA. Experienced with ReactJS, NextJS, TailwindCSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      
      {/* Hero */}
      <div className="mt-20 px-5 w-full max-w-7xl mx-auto grid md:grid-cols-3">
        <div className="col-start-1 col-span-2 self-center">
          <h1 className="font-medium text-4xl font-mono bg-gradient-to-r from-gray-100 to-gray-600 text-transparent bg-clip-text">Juan Zapata Gomez</h1>
          <h2 className="text-gray-400 font-mono text-lg mt-6 max-w-lg">Welcome to my personal portfolio. I&apos;m a developer at IBM Watson Assistant by day and a Full Stack Web Developer at night.</h2>
          <Link href="#projects" passHref>
            <a><button className="bg-gradient-to-r from-[#13adc7] to-[#935dd6] px-14 py-3 focus:outline-none mt-10 text-gray-200 text-2xl font-medium rounded-full transition duration-150 transform hover:scale-110">Learn More</button></a>
          </Link>
        </div>
        <div className="hidden md:grid">
          <Animation />
        </div>
      </div>

      {/* Divider */}
      <div id="projects" className="mt-10 px-5 w-full max-w-7xl mx-auto">
        <Divider />
      </div>


      {/* Projects */}
      <div className="mt-14 px-5 w-full max-w-7xl mx-auto">
        <Projects />
      </div>

      <div id="technologies" className="mt-14 px-5 w-full max-w-7xl mx-auto">
        <Divider />
      </div>
      
      {/* Technologies */}
      <div className="mt-12 px-5 w-full max-w-7xl mx-auto">
        <Technologies />
      </div>

      <div id="about" className="md:mt-14 mt-20 px-5 w-full max-w-7xl mx-auto">
        <Divider />
      </div>

      {/* About Me */}
      <div className="mt-12 px-5 w-full max-w-7xl mx-auto">
        <AboutMe />
      </div>

      {/* Footer */}
    </div>
  )
}
