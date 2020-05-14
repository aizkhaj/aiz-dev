import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url }) => {
  const date = new Date(publishedAt).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} – Aizaz Khaja`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary
        }}
      />
      <ArticleJsonLd
        authorName="Aizaz Khaja"
        dateModified={date}
        datePublished={date}
        description={summary}
        publisherName="Aizaz Khaja"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
