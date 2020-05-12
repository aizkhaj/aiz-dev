import Heading from "../components/Heading";
import Stack from "../components/Stack";
import About from "../components/About";
import ProjectShowcase from "../components/ProjectShowcase";
import ProjectCard from "../components/ProjectCard";
import ArticleList from "../components/ArticleList";
import Container from "../components/Container";

export default function Index() {
  return (
    <Container>
      <Stack>
        <About />
        <ProjectShowcase />
        <section>
          <Heading>Inside the Mind of a Tinkerer</Heading>
          <ArticleList />
        </section>
        <section>
          <Heading>Feel free to reach out to me!</Heading>
        </section>
      </Stack>
    </Container>
  );
}
