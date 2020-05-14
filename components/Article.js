import Link from "next/link";

const Article = (frontMatter) => {
  const { title, summary } = frontMatter;
  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  return (
    <Link href={`blog/${slug}`} passHref>
      <a className="w-full hover:no-underline">
        <div className="w-full block mb-8">
          <div className="flex flex-col w-full content-start space-between">
            <h3 className="text-2xl mb-1 font-medium">{title}</h3>
          </div>
          <p className="text-gray-700">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default Article;
