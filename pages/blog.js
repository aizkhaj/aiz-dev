import Container from "../components/Container";
import Stack from "../components/Stack";
import Heading from "../components/Heading";
import Article from "../components/Article";
import Section from "../components/Section";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

const Blog = () => {
  const sortedByMostRecentBlogPosts = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container>
      <Stack>
        <div className="mt-7 mb-10">
          <Heading>Blog</Heading>
        </div>
        <Section sectionName="All Posts">
          {sortedByMostRecentBlogPosts.map((frontMatter) => (
            <Article key={frontMatter.title} {...frontMatter} />
          ))}
        </Section>
      </Stack>
    </Container>
  );
};

export default Blog;
