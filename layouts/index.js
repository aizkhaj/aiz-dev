import Container from "../components/Container";
import Stack from "../components/Stack";
import { parseISO, format } from "date-fns";

export default (frontMatter) => {
  // const slug = frontMatter.__resourcePath
  //   .replace('blog/', '')
  //   .replace('.mdx', '');

  return ({ children: content }) => {
    return (
      <Container>
        <Stack>
          <div className="flex flex-col w-full content-start justify-start">
            <div className="flex flex-row justify-between mt-2 mb-4 w-full">
              <div className="flex items-center">
                <img
                  src="https://twitter.com/aizazkhaja/photo"
                  alt="aizaz-pic"
                  className="m-2 w-2"
                />
                <span className="text-sm text-gray-700">
                  {"Aizaz Khaja / "}
                  {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {frontMatter.readingTime.text}
              </span>
            </div>
          </div>
          {content}
        </Stack>
      </Container>
    );
  };
};
