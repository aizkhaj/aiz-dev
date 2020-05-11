import Heading from '../components/Heading'
import Container from '../components/Container'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectCard from '../components/ProjectCard'
import ArticleList from '../components/ArticleList'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <>
      {/* <div className="flex flex-col justify-center"> */}
      <Hero />
      <Container>
        <About />
        <section>
          <Heading>Projects</Heading>
          <ProjectCard />
          <ProjectCard />
        </section>
        <section>
          <Heading>Inside the Mind of a Tinkerer</Heading>
          <ArticleList />
        </section>
        <section>
          <Heading>Feel free to reach out to me!</Heading>
        </section>
      </Container>
      <Footer />
      {/* </div> */}
    </>
  )
}
