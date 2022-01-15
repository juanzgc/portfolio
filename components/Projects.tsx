import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div>
      <p className="font-medium text-4xl font-mono bg-gradient-to-r from-gray-100 to-gray-600 text-transparent bg-clip-text">Projects</p>
      <div className="flex flex-wrap -m-4 mt-8">
        <ProjectCard href="https://livelo.bike" img="/livelo.png" alt="Livelo" h1="Livelo" p="E-Commerce, NextJS, PostgreSQL, Prisma, Auth0, MaterialUI" h2="Served as the architect and developer for a professional road bike rental company based in Sydney, Australia. The application includes a Web Chat, Product Catalog, Admin Portal, User Profile, and much more!" buttonText="Learn More" />
        <ProjectCard href="https://google.juanzg.com" img="/google.png" alt="Google Clone" h1="Google Clone" p="NextJS, TailwindCSS, Google Search API" h2="Fully functionable Google clone developed using the NextJS framework and TailwindCSS. The application is server-side rendered and outputs identical search results via the Google Search API." buttonText="Learn More" />
        <ProjectCard href="https://hulu.juanzg.com" img="/hulu.png" alt="Hulu Clone" h1="Hulu Clone" p="NextJS, TailwindCSS, IMDB API" h2="UX Hulu Clone created with TailwindCSS and NextJS framwork. Movies are rendered via the IMDb API. Includes pagination, filtering, image optmization, caching, and more!" buttonText="Learn More" />
      </div>
    </div>
  )
}

export default Projects
