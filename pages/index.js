import Stack from "../components/Stack";
import IntroHeading from "../components/IntroHeading";
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
        <IntroHeading />
        <Section sectionName="Latest Posts">
          {threeRecentPosts.map((post) => (
            <Article key={post.title} {...post} />
          ))}
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
            Reach out to me via <a href="https://www.twitter.com/aizazkhaja" target="_blank" className="no-underline text-teal-700">Twitter</a> or connect with me on <a href="https://www.linkedin.com/in/aizaz-khaja" target="_blank" className="no-underline text-teal-700">LinkedIn</a>.
          </p>
        </Section>
      </Stack>
    </Container>
  );
}
