import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div>
      <p className="font-medium text-4xl font-mono bg-gradient-to-r from-gray-100 to-gray-600 text-transparent bg-clip-text">Projects</p>
      <div className="flex flex-wrap -m-4 mt-8">
        <ProjectCard href="https://livelo.bike" img="/livelo.png" alt="Livelo" h1="Livelo" p="E-Commerce, NextJS, MaterialUI, PostgreSQL, Auth0, Admin Dashboard" h2="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." buttonText="Learn More" />
        <ProjectCard href="https://google.juanzg.com" img="/google.png" alt="Google Clone" h1="Google Clone" p="NextJS, TailwindCSS, Google Search API" h2="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." buttonText="Learn More" />
        <ProjectCard href="https://hulu.juanzg.com" img="/hulu.png" alt="Hulu Clone" h1="Hulu Clone" p="NextJS, TailwindCSS, IMDB API" h2="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." buttonText="Learn More" />
      </div>
    </div>
  )
}

export default Projects
