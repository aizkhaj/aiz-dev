import { parseISO, format } from "date-fns";
import Container from "../components/Container";
import Stack from "../components/Stack";

export default (frontMatter) => {
  const { title } = frontMatter;
  // const slug = frontMatter.__resourcePath
  //   .replace('blog/', '')
  //   .replace('.mdx', '');

  return ({ children: content }) => {
    return (
      <Container>
        <Stack>
          <div className="flex flex-col w-full content-start justify-start mt-7">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex flex-row justify-between mt-2 mb-4 w-full">
              <div className="flex items-center content-center my-2">
                <img
                  src="/static/images/aizaz.png"
                  alt="aizaz-pic"
                  className="w-10 rounded-full"
                />
                <div className="ml-4 text-sm text-gray-700">
                  {"Aizaz Khaja / "}
                  {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                </div>
              </div>
              <div className="flex text-sm text-gray-500 items-center content-center">
                {frontMatter.readingTime.text}
              </div>
            </div>
          </div>
          <div className="markdown">{content}</div>
        </Stack>
      </Container>
    );
  };
};
