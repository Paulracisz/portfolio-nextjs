import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import notByAIBadge from "../../assets/Written-By-Human-Not-By-AI-Badge-black@2x.png";
import ScrollTopButton from "app/components/ScrollTopButton";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <ScrollTopButton />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <img width={550} src={post.metadata.image} alt="article thumbnail" />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 text-sm">
        <p className="text-sm text-[#2C3E50]">
          {formatDate(post.metadata.publishedAt)}
          <br />
          Reading Duration: {post.metadata.timeToRead}
        </p>
      </div>
      <article className="prose text-left text-[#2C3E50] font-sans text-lg">
        <a
          href="/blog/"
          className="inline-flex items-center no-underline underline-none justify-center rounded font-semibold bg-white px-4 py-2 text-[#00674F] hover:text-[#D4AF37] hover:cursor-pointer"
        >
          ← Go Back
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://notbyai.fyi/"
        >
          <img
            className="w-40"
            src={notByAIBadge.src}
            alt="A Badge that declares that this content was written by a human, not an AI."
          />
        </a>
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
