import { parseISO, format } from "date-fns";
import Container from "../components/Container";
import Stack from "../components/Stack";
import BlogSeo from "../components/BlogSeo";

export default (frontMatter) => {
  const { title } = frontMatter;
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return ({ children: content }) => {
    return (
      <>
        <BlogSeo url={`https://aizaz.dev/blog/${slug}`} {...frontMatter} />
        <Container>
          <Stack>
            <div className="flex flex-row w-full mt-7">
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <div className="flex flex-col justify-between mt-2 mb-8 w-full">
              <div className="text-sm text-gray-700">
                {"Aizaz Khaja / "}
                {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
              </div>
              <div className="text-sm text-gray-500">
                {frontMatter.readingTime.text}
              </div>
            </div>
            <div className="markdown">{content}</div>
          </Stack>
        </Container>
      </>
    );
  };
};
