import Heading from "../components/Heading";
import Stack from "../components/Stack";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import ArticleList from "../components/ArticleList";
import Container from "../components/Container";

export default function Index() {
  return (
    <Container>
      <Stack>
        <About />
        <Section sectionName="Latest Posts">
          <ArticleList />
        </Section>
        <Section sectionName="Projects">
          <ProjectCard
            href="https://halalscope.co"
            name="Halalscope"
            description="Find halal investing opportunities using Halalscope."
          />
        </Section>
        <Section sectionName="Get in touch!">
          <p>
            Reach out to me via Twitter DM or shoot me a message at
            hello@aizaz.dev
          </p>
        </Section>
      </Stack>
    </Container>
  );
}
