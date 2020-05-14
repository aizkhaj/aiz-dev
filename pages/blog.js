import Container from "../components/Container";
import Stack from "../components/Stack";
import Heading from "../components/Heading";
import Article from "../components/Article";
import Section from "../components/Section";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

const Blog = () => (
  <Container>
    <Stack>
      <div className="mt-7 mb-10">
        <Heading>Blog</Heading>
      </div>
      <Section sectionName="All Posts">
        {blogPosts.map((frontMatter) => (
          <Article key={frontMatter.title} {...frontMatter} />
        ))}
      </Section>
    </Stack>
  </Container>
);

export default Blog;
