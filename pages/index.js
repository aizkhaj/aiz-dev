import Stack from "../components/Stack";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import Article from "../components/Article";
import Container from "../components/Container";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

export default function Index() {
  const mostRecentPosts = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  const threeRecentPosts = [
    mostRecentPosts[0],
    mostRecentPosts[1],
    mostRecentPosts[2],
  ];

  return (
    <Container>
      <Stack>
        <About />
        <Section sectionName="Latest Posts">
          {threeRecentPosts.map((post) => {
            return <Article key={post.title} {...post} />;
          })}
        </Section>
        <Section sectionName="Projects">
          <ProjectCard
            href="https://halalscope.co"
            logoPath="/static/images/hs_logo.png"
            name="Halalscope"
            description="Find halal investing opportunities using Halalscope."
          />
        </Section>
        <Section sectionName="Get in touch!">
          <p>
            Reach out to me via Twitter, connect with me on LinkedIn, or shoot
            me a message at hello@aizaz.dev
          </p>
        </Section>
      </Stack>
    </Container>
  );
}
