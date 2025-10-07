
import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  // Sort newest → oldest
  const sorted = allBlogs.sort((a, b) =>
    new Date(b.metadata.publishedAt) > new Date(a.metadata.publishedAt) ? 1 : -1
  );

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sorted.map((post) => {
        const { slug, metadata } = post;
        const { title, publishedAt, image, tag } = metadata;

        const thumbSrc =
          typeof image === 'string'
            ? image
            : null;

        return (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-[#D4AF37] transition-shadow bg-white hover:shadow-lg"
          >
            {thumbSrc && (
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={thumbSrc}
                  alt={`Thumbnail for ${title}`}
                  fill                 // makes the image fill the parent div
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            )}

            <div className="p-4">
              <p className="text-sm font-semibold text-[#2C3E50] tabular-nums">
                {formatDate(publishedAt, false)}
              </p>
              <p id="tags" className="text-sm font-bold text-[#D4AF37] tabular-nums"> { tag }</p>
              <h2 className="mt-1 text-lg font-semibold text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors">
                {title}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}