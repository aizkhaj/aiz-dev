import Stack from "../components/Stack";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import Article from "../components/Article";
import Container from "../components/Container";

import { frontMatter as openSourceFirst } from "./blog/first-open-source-project.mdx";

export default function Index() {
  return (
    <Container>
      <Stack>
        <About />
        <Section sectionName="Latest Posts">
          <Article {...openSourceFirst} />
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
